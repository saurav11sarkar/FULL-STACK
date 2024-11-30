// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';


const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
    const studentId = req.params.studentId;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Students are deleted successfully',
      data: result,
    });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
