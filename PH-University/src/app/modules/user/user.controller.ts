// import { RequestHandler } from 'express';
// import { userValidation } from './user.validation';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../errors/appError';

const createStudent = catchAsync(async (req, res) => {
  // console.log(req.file,'files');
  // console.log(req.body);
  const { password, student: studentData } = req.body;
  const result = await UserService.createStudentIntoDB(
    req.file,
    password,
    studentData,
  );

  res.status(201).json({
    success: true,
    message: 'Student is create successfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserService.createFacultyIntoDB(req.file,password, facultyData);

  res.status(201).json({
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserService.createAdminIntoDB(req.file,password, adminData);

  res.status(201).json({
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  // const token = req.headers.authorization;
  // if (!token) {
  //   throw new AppError(403, 'You are not authorized');
  // }
  const { userId, role } = req.user;
  const result = await UserService.getMe(userId, role);
  res.status(200).json({
    success: true,
    message: 'User is retrieved successfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.changeStatus(id, req.body);
  res.status(200).json({
    success: true,
    message: 'User status is updated successfully',
    data: result,
  });
});

export const UserColtroller = {
  createStudent,
  createFaculty,
  createAdmin,
  getMe,
  changeStatus,
};
