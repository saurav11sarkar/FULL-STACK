import { Students } from "./student.interface";
import StudentData from "./student.model";

const studentPostServer = async (student: Students) => {
  try {
    const result = await StudentData.create(student);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const studentAllServer = async () => {
  try {
    const allStudent = await StudentData.find();
    return allStudent;
  } catch (error) {
    console.log(error);
  }
};

const studentSingleServer = async (_id: string) => {
  try {
    const singleId = await StudentData.findOne({ _id });
    return singleId;
  } catch (error) {
    console.log(error);
  }
};

export const studentServer = {
  studentPostServer,
  studentAllServer,
  studentSingleServer,
};
