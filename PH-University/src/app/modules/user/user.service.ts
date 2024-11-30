import { config } from '../../config';
import { TStudents } from '../student/student.interface';
import StudentModel from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';

const createStudentIntoDB = async (
  password: string,
  studentData: TStudents,
) => {
  
  // create  a user object
  const userData: Partial<TUser> = {};
  userData.password = password || (config.PASSWORD as string);

  userData.role = 'student';
  // setmanully generated it
  userData.id = '203010001';

  // create user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id,_id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //ref id
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
