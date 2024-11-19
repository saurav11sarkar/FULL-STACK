import { TStudents } from "./student.interface";
import StudentData from "./student.model";

const studentPostServer = async (student: TStudents) => {
  if (await StudentData.isUserExists(student.id)) {
    throw new Error("User already exists!");
  }
  const result = await StudentData.create(student); //built in static method

  return result;

  //   const students = new StudentData(student); //create an instance
  //   if(await students.isUserExits(student.id)){
  //     throw new Error('User alrady existis!')
  //   }
  //   await students.save(); //built in intance method
  //   return students;
};

const studentAllServer = async () => {
  const allStudent = await StudentData.find();
  return allStudent;
};

const studentSingleServer = async (_id: string) => {
  const singleId = await StudentData.findOne({ _id });
  return singleId;
};

export const studentServer = {
  studentPostServer,
  studentAllServer,
  studentSingleServer,
};
