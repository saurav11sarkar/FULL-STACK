import AppError from '../../errors/appError';
import AcademicDepartment from '../academicDepartment/academicDepartment.model';
import AcademicFaculty from '../academicFaculty/academicFaculty.model';
import { Course } from '../course/course.model';
import { Faculty } from '../faculty/faculty.model';
import { SemesterRegistation } from '../semesterRegistation/semesterRegistation.model';
import { TOfferedCourse } from './offerCourse.interface';
import { OfferedCourse } from './offerCourse.model';
import { hasTimeConflict } from './offeredCourse.utils';

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const {
    semesterRegistration,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
    section,
    days,
    startTime,
    endTime,
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

  const isCourseExist = await Course.findById(course);
  if (!isCourseExist) {
    throw new AppError(404, 'Course is not found');
  }

  const isFacultyExist = await Faculty.findById(faculty);
  if (!isFacultyExist) {
    throw new AppError(404, 'Faculty is not found');
  }

  const isDeparmentBelongeToFaculty = await AcademicDepartment.findOne({
    academicFaculty,
    _id: academicDepartment,
  });

  if (!isDeparmentBelongeToFaculty) {
    throw new AppError(
      404,
      `${isAcademicDepartmentExist.name} Department does not belong to faculty ${isAcademicFacultyExist.name}`,
    );
  }

  const isSameOfferedCourseExist = await OfferedCourse.findOne({
    semesterRegistration,
    course,
    section,
  });
  if (isSameOfferedCourseExist) {
    throw new AppError(400, 'Same course already exist');
  }

  const assignedSchedule = await OfferedCourse.find({
    semesterRegistration,
    faculty,
    days: { $in: days },
  }).select('days startTime endTime');

  const newSchedule = {
    days,
    startTime,
    endTime,
  };

  if (hasTimeConflict(assignedSchedule, newSchedule)) {
    throw new AppError(400, 'Schedule conflict');
  }

  const result = await OfferedCourse.create({ ...payload, academicSemester });
  return result;
};

const updateOfferedCourseIntoDB = async (
  id: string,
  payload: Pick<TOfferedCourse, 'faculty' | 'days' | 'startTime' | 'endTime'>,
) => {
  const { faculty, days, startTime, endTime } = payload;

  const isOfferedCourseExist = await OfferedCourse.findById(id);
  if (!isOfferedCourseExist) {
    throw new AppError(404, 'Offered course is not found');
  }

  const isFacultyExist = await Faculty.findById(faculty);
  if (!isFacultyExist) {
    throw new AppError(404, 'Faculty is not found');
  }

  const semesterRegistration = isOfferedCourseExist.semesterRegistration;

  const semesterRegistationStatus =
    await SemesterRegistation.findById(semesterRegistration);

  if (semesterRegistationStatus?.status === 'UPCOMING') {
    throw new AppError(400, `You can't update offered course ${semesterRegistationStatus?.status}`);
  }

  const assignedSchedule = await OfferedCourse.find({
    semesterRegistration,
    faculty,
    days: { $in: days },
  }).select('days startTime endTime');

  const newSchedule = {
    days,
    startTime,
    endTime,
  };

  if (hasTimeConflict(assignedSchedule, newSchedule)) {
    throw new AppError(400, 'Schedule conflict');
  }

  const result = await OfferedCourse.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const getAllOfferedCourseFromDB = async () => {
  const result = await OfferedCourse.find({});
  return result;
};

export const OfferedCourseService = {
  createOfferedCourseIntoDB,
  updateOfferedCourseIntoDB,
  getAllOfferedCourseFromDB
};
