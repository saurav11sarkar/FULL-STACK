import jwt from 'jsonwebtoken';

export const createTocken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expireIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn: expireIn,
  });
};
