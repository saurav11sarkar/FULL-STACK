import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidations } from './auth.validation';
import { AuthController } from './auth.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constan';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.loginValidationSchema),
  AuthController.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthController.changePassword,
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidations.refreshTokenValidationSchema),
  AuthController.refreshToken,
);

router.post('/forget-password', validateRequest(AuthValidations.forgetPasswordValidationSchema),AuthController.forgetPassword);

router.post('/reset-password',validateRequest(AuthValidations.resetPasswordValidationSchema),AuthController.resetPassword);


export const AuthRoutes = router;
