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
  '/create-academic-deperment/:depermentId',
  AcademicDepermentsController.getSingleAcademicDeperments,
);

router.patch(
  '/create-academic-deperment/:depermentId',
  validateRequest(academicDepartmentValidetion.updateacademicDepartmentSchema),
  AcademicDepermentsController.updateAcademicDeperments,
);

router.get(
  '/create-academic-deperment',
  AcademicDepermentsController.getAllAcademicDeperments,
);

export const academicDepermentsRouter = router;
