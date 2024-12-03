import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    { role: 'student' },
    { id: 1, _id: 0 },
  ).sort({createdAt:-1}).lean();

  return lastStudent?.id ? lastStudent.id:undefined
};

// year semestercode 4 dogit number info
export const generateStudentId = async(payload: TAcademicSemester) => {
  // first time 0000
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterCode = lastStudentId?.substring(4,6);
  const lastStudentYear = lastStudentId?.substring(0,4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;
  if(lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear){
    currentId = lastStudentId.substring(6)
  }

  let incremenId = (Number(currentId) + 1).toString().padStart(4, '0');
  incremenId = `${payload.year}${payload.code}${incremenId}`;
  return incremenId;
};
