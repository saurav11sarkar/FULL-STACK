
import { Student } from './student.interface';
import Students from './student.model';


const createStudentIntoDB = async (student: Student) => {
  try {
    const result = await Students.create(student);
    return result;
  } catch (error) {
    console.error('Error creating student:', error);
  }
};

const allStudentGet = async () =>{
  try {
    const findAll = await Students.find();
    return findAll
  } catch (error) {
    console.log(error)
  }
}
const singleStudentGet = async (id:string) =>{
  try {
    const findOne = await Students.findOne({id});
    return findOne
  } catch (error) {
    console.log(error)
  }
}

export const StudentServices = {
  createStudentIntoDB,
  allStudentGet,
  singleStudentGet
};