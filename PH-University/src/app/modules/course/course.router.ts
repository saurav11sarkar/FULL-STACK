import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CourseValidation } from './course.validation';
import { CourseController } from './course.controller';
import auth from '../../middleware/auth';
const router = express.Router();

router.post(
  '/create-course',auth('admin'),
  validateRequest(CourseValidation.createCourseValidation),
  CourseController.createCourse,
);

router.get('/',auth('admin','faculty','student'), CourseController.getAllCourse);
router.get('/:id', CourseController.getSingleCourse);

router.patch(
  '/:id',auth('admin'),
  validateRequest(CourseValidation.updateCourseValidation),
  CourseController.updateCourse,
);

router.delete('/:id',auth('admin'), CourseController.deleteCourse);

router.put(
  '/:courseId/assign-faculties',
  validateRequest(CourseValidation.facultiesWithCourseValidationSchema),
  CourseController.assignFaculties,
);
router.delete(
  '/:courseId/remove-faculties',
  validateRequest(CourseValidation.facultiesWithCourseValidationSchema),
  CourseController.removeFaculties,
);



export const CourseRouter = router;
