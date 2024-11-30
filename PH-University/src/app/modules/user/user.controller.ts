// import { RequestHandler } from 'express';
import { userValidation } from './user.validation';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;
    // const zodParseData = userValidation.userSchema.parse(studentId);

    const result = await UserService.createStudentIntoDB(password, studentData);

    res.status(201).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
});

export const UserColtroller = {
  createStudent,
};
