import express, { NextFunction, Request, Response } from 'express';
import { UserColtroller } from './user.controller';

import validateRequest from '../../middleware/validateRequest';
import { validateStudent } from '../student/student.validation';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../admin/admin.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constan';
import router from '../../routes';
import { userValidation } from './user.validation';
import { upload } from '../../utils/sendImageToCloudenary';
const userRouter = express.Router();

userRouter.post(
  '/create-student',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(validateStudent.createStudentSchema),
  UserColtroller.createStudent,
);

userRouter.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createFacultyValidationSchema),
  UserColtroller.createFaculty,
);

userRouter.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createAdminValidationSchema),
  UserColtroller.createAdmin,
);

userRouter.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(userValidation.changeStatusValidationSchema),
  UserColtroller.changeStatus,
);

userRouter.get(
  '/me',
  auth('admin', 'student', 'faculty'),
  UserColtroller.getMe,
);

export const UserRouters = userRouter;
