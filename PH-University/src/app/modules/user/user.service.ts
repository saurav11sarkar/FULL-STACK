import mongoose from 'mongoose';
import { config } from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudents } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from './user.utile';
import AppError from '../../errors/appError';
import { TFaculty } from '../faculty/faculty.interface';
import AcademicDepartment from '../academicDepartment/academicDepartment.model';
import { Faculty } from '../faculty/faculty.model';
import { Admin } from '../admin/admin.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudenary';
// import { verifyToken } from '../auth/auth.utils';

const createStudentIntoDB = async (
  file: any,
  password: string,
  payload: TStudents,
) => {
  try {
    // Create a user object
    const userData: Partial<TUser> = {};
    userData.password = password || (config.PASSWORD as string);
    userData.role = 'student';
    userData.email = payload.email;

    // Log the admissionSemester ID
    console.log('AdmissionSemester ID:', payload.admissionSemester);

    // Find academic semester info
    const admissionSemester = await AcademicSemester.findById(
      payload.admissionSemester,
    );
    if (!admissionSemester) {
      throw new Error('Academic semester not found');
    }

    // find department
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDeperment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Aademic department not found');
  }
  // payload.academicFaculty = academicDepartment.academicFaculty;
  payload.academicFaculty = academicDepartment.academicFaculty

    // transaction and rollback
    const session = await mongoose.startSession();
    try {
      session.startTransaction();
      // Set manually generated id
      userData.id = await generateStudentId(admissionSemester);

      const imageName = `${userData?.id}${payload?.name?.firstName}`;
      const path = file?.path;
      // send image to cloudinary
      const {secure_url}:any = await sendImageToCloudinary(imageName, path);

      // Create user (transaction-1)
      const newUser = await User.create([userData], { session });

      // Create a student
      if (!newUser.length) {
        throw new AppError(400, 'User creation failed');
      } else {
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id; // Reference user id
        payload.profileImg = secure_url;

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

const createFacultyIntoDB = async (file: any, password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.PASSWORD as string);

  //set student role
  userData.role = 'faculty';
  userData.email = payload.email;

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

    const imageName = `${userData?.id}${payload?.name?.firstName}`;
    const path = file?.path;
    // send image to cloudinary
    const {secure_url}:any = await sendImageToCloudinary(imageName, path);

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
    payload.profileImg = secure_url;

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

const createAdminIntoDB = async (file: any, password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.PASSWORD as string);

  //set student role
  userData.role = 'admin';
  userData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    const imageName = `${userData?.id}${payload?.name?.firstName}`;
    const path = file?.path;
    // send image to cloudinary
    const {secure_url}:any = await sendImageToCloudinary(imageName, path);

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
    payload.profileImg = secure_url;

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

const getMe = async (userId: string, role: string) => {
  // const decoded = verifyToken(token, config.SECRET as string);
  // const { userId, role } = decoded;
  let result = null;
  if (role === 'student') {
    result = await StudentModel.findOne({ id: userId }).populate('user');
  }
  if (role === 'faculty') {
    result = await Faculty.findOne({ id: userId }).populate('user');
  }
  if (role === 'admin') {
    result = await Admin.findOne({ id: userId }).populate('user');
  }

  if (!result) {
    throw new AppError(400, 'User not found');
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

export const UserService = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
  getMe,
  changeStatus,
};
