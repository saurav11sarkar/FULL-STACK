import catchAsync from '../../utils/catchAsync';
import { EnrolledCourseService } from './enrolledCourse.service';

const createEnrolledCourse = catchAsync(async (req, res) => {
  console.log(req.user, 'user');
  const result = await EnrolledCourseService.createEnrolledCourse(
    req.user.userId,
    req.body
  );
  res.status(201).json({
    success: true,
    message: 'Enrolled course is created successfully',
    data: result,
  });
});

export const EnrolledCourseController = {
  createEnrolledCourse,
};
