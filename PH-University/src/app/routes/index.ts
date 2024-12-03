import express from 'express';
import { studentRouter } from '../modules/student/student.router';
import { UserRouters } from '../modules/user/user.router';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { academicFacultyRouter } from '../modules/academicFaculty/AcademicFaculty.router';
import { academicDepermentsRouter } from '../modules/academicDepartment/AcademicDeperments.router';
const router = express.Router();
router.use('/students', studentRouter);
router.use('/users', UserRouters);
router.use('/academic-semesters', academicSemesterRoute);
router.use('/academic-faculties', academicFacultyRouter);
router.use('/academic-deperments', academicDepermentsRouter);

export default router;
