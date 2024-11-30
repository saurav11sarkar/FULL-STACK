import express, { RequestHandler } from 'express';
import { UserColtroller } from './user.controller';
const userRouter = express.Router();

const shenaBahini: RequestHandler = (req, res, next) => {
  console.log(req.body);
  next();
};

userRouter.post('/create-student', shenaBahini, UserColtroller.createStudent);

export const UserRouters = userRouter;
