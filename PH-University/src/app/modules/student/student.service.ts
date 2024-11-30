import { TStudents } from './student.interface';
import StudentModel from './student.model';

// const createStudentIntoDB = async (studentData: TStudents) => {
//   if (await StudentModel.isUserExits(studentData.id)) {
//     throw new Error('User alrady exits');
//   }
//   const result = await StudentModel.create(studentData);
//   return result;
// };

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};



const deleteStudentFromDB = async (id:string)=>{
  const result = await StudentModel.updateOne({id},{isDeleted:true});
  return result;
}

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
