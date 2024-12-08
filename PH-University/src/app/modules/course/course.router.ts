import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CourseValidation } from './course.validation';
import { CourseController } from './course.controller';
const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidation),
  CourseController.createCourse,
);

router.get('/', CourseController.getAllCourse);
router.get('/:id', CourseController.getSingleCourse);

router.patch(
  '/:id',
  validateRequest(CourseValidation.updateCourseValidation),
  CourseController.updateCourse,
);

router.delete('/:id', CourseController.deleteCourse);

export const CourseRouter = router;
