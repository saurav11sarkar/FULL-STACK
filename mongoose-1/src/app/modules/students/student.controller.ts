import { Request, Response } from "express"
import { StudentServices } from "./student.serves";


const createStudent = async (req:Request,res:Response)=>{
    try {
        const student = req.body;
        const result = await StudentServices.createStudentIntoDB(student);
        res.status(201).json({
            success:true,
            message: "Students is create successfully",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create student',
            error: error,
          });
    }
}

export const StudentController = {
    createStudent,
}