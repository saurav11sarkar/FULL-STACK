import { Request, Response } from "express";
import { studentServer } from "./student.server";
import { StudentValidationSchema } from "./student.zod";

// import studentSchema from "./student.validation";

const studentPost = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;

    // // data validation joi
    // const { error, value } = studentSchema.validate(StudentData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "Something is worng",
    //     error: error.details,
    //   });
    // }

    // datavalidation useing zod

    const zodParseData:any = StudentValidationSchema.parse(StudentData)

    const result = await studentServer.studentPostServer(zodParseData);

    res.status(201).json({
      success: true,
      message: "Created is successfully",
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something is worng",
      error: error,
    });
  }
};

const studentAllGet = async (req: Request, res: Response) => {
  try {
    const alldata = await studentServer.studentAllServer();
    res.status(200).json(alldata);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is worng",
      error: error,
    });
  }
};
const studentSingleGet = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const onedata = await studentServer.studentSingleServer(id);
    res.status(200).json(onedata);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is worng",
      error: error,
    });
  }
};

const studentDeleteData = async (req:Request,res:Response) =>{
  try {
    const id  = req.params.id;
    const deleteData = await studentServer.studentDelete(id);

    res.status(202).json({
      success: true,
      message: "Deleted is successfully",
      data: deleteData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is worng",
      error: error,
    })
  }
}

export const studentController = {
  studentPost,
  studentAllGet,
  studentSingleGet,
  studentDeleteData
};
