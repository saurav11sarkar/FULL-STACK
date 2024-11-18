
import { Student } from './student.interface';
import Students from './student.model';


const createStudentIntoDB = async (student: Student) => {
  try {
    const result = await Students.create(student);
    return result;
  } catch (error) {
    console.error('Error creating student:', error);
    throw new Error('Database operation failed');
  }
};

export const StudentServices = {
  createStudentIntoDB,
};