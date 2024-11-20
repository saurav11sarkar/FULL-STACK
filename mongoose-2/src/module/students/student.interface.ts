import { Model } from "mongoose";

// student.interface.ts
export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};

export type TStudents = {
  id: string;
  password:string;
  name: TUserName;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permamentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
  isDeleted: false;
};



// for creating static

export interface StudentMethods extends Model<TStudents>{
  isUserExists(id:string): Promise<TStudents| null>
}


// for creating instance

// export type StudentMethods = {
//   isUserExits(id: string): Promise<TStudents | null >;
// };

// export type StudentModel = Model<
//   TStudents,
//   Record<string, never>,
//   StudentMethods
// >;


