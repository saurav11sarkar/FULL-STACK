import express from "express";
import { studentController } from "./student.controller";
const router = express.Router();

router.post('/', studentController.studentPost);
router.get('/', studentController.studentAllGet);
router.get('/:id', studentController.studentSingleGet);

export const studentRouter = router;
