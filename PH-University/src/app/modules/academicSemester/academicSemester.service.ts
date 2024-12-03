import { academicSemesterNameCodeMaper } from './academicSemester.constants';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMaper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const allAcademicSemesters = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const singleAcademicSemester = async (_id: string) => {
  const result = await AcademicSemester.findById(_id);
  if (!result) {
    throw new Error('Not create this Semester');
  }
  return result;
};

const updateAcademicSemester = async (
  _id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if(payload.name && payload.code && academicSemesterNameCodeMaper[payload.name] !== payload.code){
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.findByIdAndUpdate(_id,payload,{new:true});
  if (!result) {
    throw new Error('Not create this Semester');
  }
  return result;
};

export const AcademicService = {
  createAcademicSemesterIntoDb,
  allAcademicSemesters,
  singleAcademicSemester,
  updateAcademicSemester,
};
