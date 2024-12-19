import AppError from '../../errors/appError';
import AcademicDepartment from '../academicDepartment/academicDepartment.model';
import AcademicFaculty from '../academicFaculty/academicFaculty.model';
import { Course } from '../course/course.model';
import { Faculty } from '../faculty/faculty.model';
import { SemesterRegistation } from '../semesterRegistation/semesterRegistation.model';
import { TOfferedCourse } from './offerCourse.interface';
import { OfferedCourse } from './offerCourse.model';

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const {
    semesterRegistration,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
  } = payload;

  const isSemesterRegistionExist =
    await SemesterRegistation.findById(semesterRegistration);
  if (!isSemesterRegistionExist) {
    throw new AppError(404, 'Semester Registration is not found');
  }

  const academicSemester = isSemesterRegistionExist.academicSemester;

  const isAcademicFacultyExist =
    await AcademicFaculty.findById(academicFaculty);
  if (!isAcademicFacultyExist) {
    throw new AppError(404, 'Academic faculty is not found');
  }

  const isAcademicDepartmentExist =
    await AcademicDepartment.findById(academicDepartment);
  if (!isAcademicDepartmentExist) {
    throw new AppError(404, 'Academic department is not found');
  }

  const isCourseExist =
    await Course.findById(course);
  if (!isCourseExist) {
    throw new AppError(404, 'Course is not found');
  }

  const isFacultyExist =
    await Faculty.findById(faculty);
  if (!isFacultyExist) {
    throw new AppError(404, 'Faculty is not found');
  }

  const result = await OfferedCourse.create({...payload,academicSemester});
  return result;
};

export const OfferedCourseService = {
  createOfferedCourseIntoDB,
};
