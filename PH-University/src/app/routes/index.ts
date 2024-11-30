import express from "express";
import { studentRouter } from "../modules/student/student.router";
import { UserRouters } from "../modules/user/user.router";
const router = express.Router();
router.use('/students',studentRouter);
router.use('/users',UserRouters);

export default router;