import mongoose from 'mongoose';
import { config } from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudents } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generateAdminId, generateFacultyId, generateStudentId } from './user.utile';
import AppError from '../../errors/appError';
import { TFaculty } from '../faculty/faculty.interface';
import AcademicDepartment from '../academicDepartment/academicDepartment.model';
import { Faculty } from '../faculty/faculty.model';
import { Admin } from '../admin/admin.model';

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

const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.PASSWORD as string);

  //set student role
  userData.role = 'faculty';

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(400, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createAdminIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.PASSWORD as string);

  //set student role
  userData.role = 'admin';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); 

    //create a admin
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(400, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserService = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB
};