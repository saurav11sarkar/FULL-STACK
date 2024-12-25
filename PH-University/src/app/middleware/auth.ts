import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/appError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config';
import { TUserRole } from '../modules/user/user.interface';
import User from '../modules/user/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // if the token is sen from the client
    if (!token) {
      throw new AppError(401, 'Unauthorized');
    }

    // check if the token is valid
    const decoded = jwt.verify(token, config.SECRET as string) as JwtPayload;

    // if the token is invalid
    const { role, userId, iat } = decoded;

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

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(403, 'Forbidden');
    }
    // const { userId, role } = decoded;
    req.user = decoded as JwtPayload;
    return next();
  });
};

export default auth;
