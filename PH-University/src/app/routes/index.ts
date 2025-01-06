import express from 'express';
import { studentRouter } from '../modules/student/student.router';
import { UserRouters } from '../modules/user/user.router';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { academicFacultyRouter } from '../modules/academicFaculty/AcademicFaculty.router';
import { academicDepermentsRouter } from '../modules/academicDepartment/AcademicDeperments.router';
import { FacultyRoutes } from '../modules/faculty/faculty.routers';
import { AdminRoutes } from '../modules/admin/admin router';
import { CourseRouter } from '../modules/course/course.router';
import { SemesterRegistarRouter } from '../modules/semesterRegistation/semesterRegistation.router';
import { OfferedCourseRoutes } from '../modules/offeredCourse/offerCourse.router';
import { AuthRoutes } from '../modules/auth/auth.router';
import { EnrolledCourseRouter } from '../modules/enrolledCourse/enrolledCourse.router';
const router = express.Router();

router.use('/students', studentRouter);
router.use('/users', UserRouters);
router.use('/academic-semesters', academicSemesterRoute);
router.use('/academic-faculties', academicFacultyRouter);
router.use('/academic-deperments', academicDepermentsRouter);
router.use('/faculties', FacultyRoutes);
router.use('/admins', AdminRoutes);
router.use('/courses', CourseRouter);
router.use('/semesters',SemesterRegistarRouter);
router.use('/offered-courses',OfferedCourseRoutes);
router.use('/auth',AuthRoutes);
router.use('/enrolled-courses',EnrolledCourseRouter);

export default router;
