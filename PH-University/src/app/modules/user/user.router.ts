import express from 'express';
import { UserColtroller } from './user.controller';

import validateRequest from '../../middleware/validateRequest';
import { validateStudent } from '../student/student.validation';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../admin/admin.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constan';
const userRouter = express.Router();

userRouter.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(validateStudent.createStudentSchema),
  UserColtroller.createStudent,
);

userRouter.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserColtroller.createFaculty,
);

userRouter.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserColtroller.createAdmin,
);

export const UserRouters = userRouter;
