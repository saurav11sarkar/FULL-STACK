import AppError from '../../errors/appError';
import { OfferedCourse } from '../offeredCourse/offerCourse.model';
import StudentModel from '../student/student.model';
import { TEnrolledCourse } from './enrolledCourse.interface';
import EnrolledCourse from './enrolledCourse.model';

const createEnrolledCourse = async (
  userId: string,
  payload: TEnrolledCourse,
) => {
  const { offeredCourse } = payload;
  const isOfferedCourseExist = await OfferedCourse.findById(offeredCourse);

  if (!isOfferedCourseExist) {
    throw new AppError(400, 'Offered course not found');
  }

  if(isOfferedCourseExist?.maxCapacity <= 0){
    throw new AppError(400, 'Offered course is full');
  }

  const student = await StudentModel.findOne({ id: userId }).select('id');
  if (!student) {
    throw new AppError(404, 'student not found');
  }
  const isStudentAlreadyEnrolled = await EnrolledCourse.findOne({
    semesterRegistration: isOfferedCourseExist?.semesterRegistration,
    offeredCourse,
    student: student?._id,
  });

  if (isStudentAlreadyEnrolled) {
    throw new AppError(400, 'Student already enrolled');
  }

  payload.semesterRegistration = isOfferedCourseExist?.semesterRegistration;

  const result = await EnrolledCourse.create(payload);
  return result;
};

export const EnrolledCourseService = {
  createEnrolledCourse,
};
