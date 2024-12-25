import QueryBuilder from '../../builder/QueryBuilder';
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
  /**
   * Step 1: check if the offered course exists
   * Step 2: check if the faculty exists
   * Step 3: check if the semester registration status is upcoming
   * Step 4: check if the faculty is available at that time. If not then throw error
   * Step 5: update the offered course
   */
  const { faculty, days, startTime, endTime } = payload;

  const isOfferedCourseExists = await OfferedCourse.findById(id);

  if (!isOfferedCourseExists) {
    throw new AppError(404, 'Offered course not found !');
  }

  const isFacultyExists = await Faculty.findById(faculty);

  if (!isFacultyExists) {
    throw new AppError(404, 'Faculty not found !');
  }

  const semesterRegistration = isOfferedCourseExists.semesterRegistration;
  // get the schedules of the faculties

  // Checking the status of the semester registration
  const semesterRegistrationStatus =
    await SemesterRegistation.findById(semesterRegistration);

  if (semesterRegistrationStatus?.status !== 'UPCOMING') {
    throw new AppError(
      404,
      `You can not update this offered course as it is ${semesterRegistrationStatus?.status}`,
    );
  }

  // check if the faculty is available at that time.
  const assignedSchedules = await OfferedCourse.find({
    semesterRegistration,
    faculty,
    days: { $in: days },
  }).select('days startTime endTime');

  const newSchedule = {
    days,
    startTime,
    endTime,
  };

  if (hasTimeConflict(assignedSchedules, newSchedule)) {
    throw new AppError(
      400,
      `This faculty is not available at that time ! Choose other time or day`,
    );
  }

  const result = await OfferedCourse.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};


const getAllOfferedCoursesFromDB = async (query: Record<string, unknown>) => {
  const offeredCourseQuery = new QueryBuilder(OfferedCourse.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await offeredCourseQuery.modelQuery;
  return result;
};

const getSingleOfferedCourseFromDB = async (id: string) => {
  const offeredCourse = await OfferedCourse.findById(id);

  if (!offeredCourse) {
    throw new AppError(404, 'Offered Course not found');
  }

  return offeredCourse;
};

const deleteOfferedCourseFromDB = async (id: string) => {

  const isOfferedCourseExists = await OfferedCourse.findById(id);

  if (!isOfferedCourseExists) {
    throw new AppError(404, 'Offered Course not found');
  }

  const semesterRegistation = isOfferedCourseExists.semesterRegistration;

  const semesterRegistrationStatus =
    await SemesterRegistation.findById(semesterRegistation).select('status');

  if (semesterRegistrationStatus?.status !== 'UPCOMING') {
    throw new AppError(
      404,
      `Offered course can not update ! because the semester ${semesterRegistrationStatus}`,
    );
  }

  const result = await OfferedCourse.findByIdAndDelete(id);

  return result;
};

export const OfferedCourseService = {
  createOfferedCourseIntoDB,
  updateOfferedCourseIntoDB,
  getAllOfferedCoursesFromDB,
  getSingleOfferedCourseFromDB,
  deleteOfferedCourseFromDB,
};
