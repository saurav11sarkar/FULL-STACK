import { config } from '../../config';
import AppError from '../../errors/appError';
import User from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bycrpt from 'bcrypt';
import { createTocken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByCostomId(payload?.id);

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(403, 'User is deleted');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(400, 'User is blocked');
  }

  if (!(await User.ispasswordMatched(payload?.password, user?.password))) {
    throw new AppError(403, 'Password is incorrect');
  }

  // create token and send to user
  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = createTocken(
    jwtPayload,
    config.SECRET as string,
    config.ACCESS_TOKEN_EXPIRES as string,
  );

  const refreshToken = createTocken(
    jwtPayload,
    config.REFRESH_SECRET as string,
    config.REFRESH_TOKEN_EXPIRES as string,
  );

  return {
    accessToken,
    refreshToken,
    needPasswordChange: user?.needPasswordChange,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  const user = await User.isUserExistsByCostomId(userData?.userId);

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(403, 'User is deleted');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(400, 'User is blocked');
  }

  if (!(await User.ispasswordMatched(payload.oldPassword, user?.password))) {
    throw new AppError(403, 'Password is incorrect');
  }

  const newHashPassword = await bycrpt.hash(
    payload.newPassword,
    Number(config.ROUND),
  );

  const result = await User.findOneAndUpdate(
    { id: userData.userId, role: user.role },
    {
      password: newHashPassword,
      needPasswordChange: false,
      passwordChangedAt: new Date(),
    },
  );
  return null;
};

const refreshToken = async (token: string) => {

  // check if the token is valid
  const decoded = jwt.verify(token, config.REFRESH_SECRET as string) as JwtPayload;

  // if the token is invalid
  const {  userId, iat } = decoded;

  const user = await User.isUserExistsByCostomId(userId);

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(403, 'User is deleted');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(400, 'User is blocked');
  }

  if (
    user.passwordChangedAt &&
    User.isJWTIssuedBeforePasswordChanged(
      user.passwordChangedAt,
      iat as number,
    )
  ) {
    throw new AppError(401, 'You are not Unauthorized');
  }

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = createTocken(
    jwtPayload,
    config.SECRET as string,
    config.ACCESS_TOKEN_EXPIRES as string,
  );

  const refreshToken = createTocken(
    jwtPayload,
    config.REFRESH_SECRET as string,
    config.REFRESH_TOKEN_EXPIRES as string,
  );

  return {
    accessToken,
    refreshToken,
  };
}

export const AuthService = {
  loginUser,
  changePassword,
  refreshToken
};
