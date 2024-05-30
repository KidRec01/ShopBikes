import { Router } from "express";
import { getClients, postClients } from "../controller/clients.js";
const router = Router();

router.route("").get(getClients).post(postClients);

export default router;
