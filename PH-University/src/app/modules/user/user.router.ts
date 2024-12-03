import express from 'express';
import { UserColtroller } from './user.controller';

import validateRequest from '../../middleware/validateRequest';
import { validateStudent } from '../student/student.validation';
const userRouter = express.Router();



userRouter.post(
  '/create-student',
  validateRequest(validateStudent.createStudentSchema),
  UserColtroller.createStudent,
);

export const UserRouters = userRouter;
