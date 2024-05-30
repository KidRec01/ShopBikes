import { Router } from "express";
import UserAuthenticated from "../global/authenticate/index.js";
import {
    deleteBike,
    getBike,
    getBikes,
    postBikes,
    putBike,
} from "../controller/bikes.js";

const router = Router();

router.route("").get(getBikes).post(UserAuthenticated, postBikes);
router
    .route("/:id")
    .get(getBike)
    .put(UserAuthenticated, putBike)
    .delete(UserAuthenticated, deleteBike);

export default router;
