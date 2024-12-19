import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { OfferedCourseValidation } from './offerCourse.validation';
import { OfferedCourseController } from './offerCourse.controller';
const router = express.Router();

router.post(
  '/create-offer-course',
  validateRequest(OfferedCourseValidation.createOfferedCoursevalidationSchema),
  OfferedCourseController.createOfferedCourse,
);



export const OfferedCourseRoutes = router;