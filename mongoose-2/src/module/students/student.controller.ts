import { Request, Response } from "express";
import { studentServer } from "./student.server";
import studentSchema from "./student.validation";

const studentPost = async (req: Request, res: Response) => {
  try {
    // creatting a schema validation joi
    const { student: StudentData } = req.body;
    const { error, value } = studentSchema.validate(StudentData);
    if (error) {
      res.status(500).json({
        success: false,
        message: "Something is worng",
        error: error.details,
      });
    }
    const result = await studentServer.studentPostServer(StudentData);

    res.status(201).json({
      success: true,
      message: "Created is successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is worng",
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
    const _id = req.params.id;
    const onedata = await studentServer.studentSingleServer(_id);
    res.status(200).json(onedata);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is worng",
      error: error,
    });
  }
};

export const studentController = {
  studentPost,
  studentAllGet,
  studentSingleGet,
};
