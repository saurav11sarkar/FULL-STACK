import catchAsync from '../../utils/catchAsync';
import { CourseService } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourse(req.body);
  res.status(201).json({
    success: true,
    message: 'Course is create successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCourse(req.query);
  res.status(200).json({
    success: true,
    message: 'Course are retrived successfuly',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSingleCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Course are retrived successfuly',
    data: result,
  });
});

const updateCourse = catchAsync(async(req,res)=>{
  const {id}= req.params;
  const result = await CourseService.updateCourseIntoDB(id,req.body);
  res.status(200).json({
    success:true,
    message:'Course Update successfully',
    data:result
  })
})

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.deleteCourceFromBD(id);
  res.status(200).json({
    success: true,
    message: 'Course are deleted successfuly',
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse
};
 