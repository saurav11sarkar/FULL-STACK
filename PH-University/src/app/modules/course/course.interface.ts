import { Types } from "mongoose";

export type TPreRequisiteCorses = {
    course:Types.ObjectId;
    isDeleted:boolean;
}

export type TCourse ={
    title:string;
    prefix:string;
    code:number;
    credits:number;
    preRequisteCourses:[TPreRequisiteCorses];
    isDeleted?:boolean;
}

export type TCourseFaculty = {
    course:Types.ObjectId,
    faculties:[Types.ObjectId]
}