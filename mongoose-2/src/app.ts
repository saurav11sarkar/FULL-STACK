import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentRouter } from "./module/students/student.router";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
app.use("/api/v1/student", studentRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ message: "This page is not created" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({ message: "Serv is error" });
});

export default app;
