import { Router } from "express";
import { createSchedule } from "../controller/schedule.js";

const router = Router();

router.route("/create").post(createSchedule)

export default router;