import express from "express";
import { studentController } from "./student.controller";
const router = express.Router();

router.post("/", studentController.studentPost);
router.get("/", studentController.studentAllGet);
router.get("/:id", studentController.studentSingleGet);
router.delete("/:id", studentController.studentDeleteData);

export const studentRouter = router;
