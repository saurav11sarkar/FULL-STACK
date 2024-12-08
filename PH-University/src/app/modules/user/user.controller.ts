// import { RequestHandler } from 'express';
// import { userValidation } from './user.validation';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;
    

    const result = await UserService.createStudentIntoDB(password, studentData);

    res.status(201).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserService.createFacultyIntoDB(password, facultyData);

  res.status(201).json( {
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserService.createAdminIntoDB(password, adminData);

  res.status(201).json({
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});


export const UserColtroller = {
  createStudent,
  createFaculty,
  createAdmin
};
