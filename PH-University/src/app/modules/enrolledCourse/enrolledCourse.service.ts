import { TEnrolledCourse } from "./enrolledCourse.interface";
import EnrolledCourse from "./enrolledCourse.model";

const createEnrolledCourse = async (userId: string, playload: TEnrolledCourse) => {
    
    // const result = await EnrolledCourse.create(playload);
    // return result;
};

export const EnrolledCourseService = {
    createEnrolledCourse
}