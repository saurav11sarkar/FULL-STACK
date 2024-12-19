import catchAsync from '../../utils/catchAsync';
import { OfferedCourseService } from './offerCourse.service';

const createOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.createOfferedCourseIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: 'Offered course is create successfully',
    data: result,
  });
});

export const OfferedCourseController = {
  createOfferedCourse,
};
