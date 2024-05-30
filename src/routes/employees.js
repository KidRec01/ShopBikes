import { Router } from "express";
import { createEmployees, getEmployees } from "../controller/employees.js";
import UserAuthenticated from "../global/authenticate/index.js";

const router = Router();

router.route("").post(UserAuthenticated, createEmployees).get(UserAuthenticated, getEmployees)


export default router;