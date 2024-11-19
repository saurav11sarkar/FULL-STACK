import { Students } from "./student.interface";
import StudentData from "./student.model";

const studentPostServer = async (student: Students) => {
    const result = await StudentData.create(student);
    return result;
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
