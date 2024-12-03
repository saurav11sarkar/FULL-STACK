import mongoose from 'mongoose';
import { config } from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudents } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generateStudentId } from './user.utile';
import AppError from '../../errors/appError';

const createStudentIntoDB = async (password: string, payload: TStudents) => {
  try {
    // Create a user object
    const userData: Partial<TUser> = {};
    userData.password = password || (config.PASSWORD as string);
    userData.role = 'student';

    // Log the admissionSemester ID
    console.log('AdmissionSemester ID:', payload.admissionSemester);

    // Find academic semester info
    const admissionSemester = await AcademicSemester.findById(
      payload.admissionSemester,
    );
    if (!admissionSemester) {
      throw new Error('Academic semester not found');
    }

    // transaction and rollback
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      // Set manually generated id
      userData.id = await generateStudentId(admissionSemester);

      // Create user (transaction-1)
      const newUser = await User.create([userData], { session });

      // Create a student
      if (!newUser.length) {
        throw new AppError(400, 'User creation failed');
      } else {
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id; // Reference user id

        // Create user (transaction-2)
        const newStudent = await StudentModel.create([payload], { session });

        if (!newStudent.length) {
          throw new AppError(400, 'User creation failed student');
        }

        await session.commitTransaction();
        await session.endSession();

        return newStudent;
      }
    } catch (err) {
      await session.abortTransaction();
      await session.endSession();
      throw new AppError(500, 'falid to create user');
    }
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

export const UserService = {
  createStudentIntoDB,
};
