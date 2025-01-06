import { Types } from "mongoose";

export type TGrade = "A"|"B"|"C"|"D"|"E"|"F"|"N/A";
export type TCourseMarks = {
    classTest:number;
    midTerm:number;
    classTest2:number;
    finalTerm:number;
}

export type TEnrolledCourse = {
    semesterRegistration: Types.ObjectId;
    academicSemester: Types.ObjectId;
    academicFaculty: Types.ObjectId;
    academicDepertment: Types.ObjectId;
    offeredCourse: Types.ObjectId;
    course: Types.ObjectId;
    student: Types.ObjectId;
    faculty: Types.ObjectId;
    isEnrolled: boolean;
    courseMarks: TCourseMarks;
    grade: TGrade;
    gradePoint: number;
    isComplete: boolean;
};
