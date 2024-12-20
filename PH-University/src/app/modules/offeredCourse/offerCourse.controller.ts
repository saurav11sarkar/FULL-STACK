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

const updateOfferedCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseService.updateOfferedCourseIntoDB(
    id,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'Offered course is update successfully',
    data: result,
  });
});

const getAllOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseService.getAllOfferedCourseFromDB();
  res.status(200).json({
    success: true,
    message: 'Offered course are retrieved successfully',
    data: result,
  });
})

export const OfferedCourseController = {
  createOfferedCourse,
  updateOfferedCourse,
  getAllOfferedCourse
};
