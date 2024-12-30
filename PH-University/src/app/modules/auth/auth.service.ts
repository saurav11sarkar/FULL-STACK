import { config } from '../../config';
import AppError from '../../errors/appError';
import User from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import bycrpt from 'bcrypt';
import { createTocken, verifyToken } from './auth.utils';
import { sendEmail } from '../../utils/sendEmail';

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

  await User.findOneAndUpdate(
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
  const decoded = verifyToken(token, config.REFRESH_SECRET as string);

  // if the token is invalid
  const { userId, iat } = decoded;

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
    User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
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
    // refreshToken,
  };
};

const forgetPassword = async (userId: string) => {
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

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };
  const resetToken = createTocken(jwtPayload, config.SECRET as string, '10m');

  const resetUiLink = `${config.RESET_PASS_UI_LINK}?id=${user.id}&token=${resetToken}`;
  sendEmail(user.email, resetUiLink);
  console.log(resetUiLink);
};

const resetPassword = async (
  payload: { id: string; newPassword: string },
  token: string,
) => {
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

  const decoded = jwt.verify(token, config.SECRET as string) as JwtPayload;

  if (payload.id !== decoded.userId) {
    throw new AppError(403, 'You are not Unauthorized');
  }

  const newHashPassword = await bycrpt.hash(
    payload.newPassword,
    Number(config.ROUND),
  );

  await User.findOneAndUpdate(
    { id: decoded.userId, role: decoded.role },
    {
      password: newHashPassword,
      needPasswordChange: false,
      passwordChangedAt: new Date(),
    },
  );

  return null;
};

export const AuthService = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPassword,
};
