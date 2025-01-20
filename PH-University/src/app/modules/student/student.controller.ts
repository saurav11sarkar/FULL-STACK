// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  // console.log(req.query)
  const result = await StudentServices.getAllStudentFromDB(req.query);
  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    mata: result.meta,
    data: result.result,
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

const updateStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const {student} = req.body;
  const result = await StudentServices.updateStudentFromDB(studentId, student);

  res.status(200).json({
    success: true,
    message: 'Strudent Update successfully',
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
  updateStudent,
  deleteStudent,
};
