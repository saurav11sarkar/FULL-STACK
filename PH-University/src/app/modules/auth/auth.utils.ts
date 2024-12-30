import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../config';

export const createTocken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expireIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expireIn,
  });
};

export const verifyToken = (token: string, secret: string) =>
  jwt.verify(token, secret) as JwtPayload;
