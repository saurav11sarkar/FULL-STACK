import express from 'express';
import { AcademicDepermentsController } from './AcademicDeperments.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicDepartmentValidetion } from './AcademicDepartment.validation';
const router = express.Router();

router.post(
  '/create-academic-deperment',
  validateRequest(academicDepartmentValidetion.academicDepartmentSchema),
  AcademicDepermentsController.createAcademicDeperments,
);

router.get(
  '/:depermentId',
  AcademicDepermentsController.getSingleAcademicDeperments,
);

router.patch(
  '/:depermentId',
  validateRequest(academicDepartmentValidetion.updateacademicDepartmentSchema),
  AcademicDepermentsController.updateAcademicDeperments,
);

router.get('/', AcademicDepermentsController.getAllAcademicDeperments);

export const academicDepermentsRouter = router;
