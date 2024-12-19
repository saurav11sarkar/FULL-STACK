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
