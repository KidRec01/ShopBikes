import { Router } from "express";
import passport from "passport";
import UserAuthenticated from "../global/authenticate/index.js";
import { login, logOut, createAdmin, isAuthenticated } from "../controller/admin.js";

const router = Router();

router.route("/login").post(passport.authenticate("Login"), login);
router.route("/isAuthenticated").get(UserAuthenticated, isAuthenticated)
router.route("/logout").get(UserAuthenticated, logOut);
router.route("/create").post(createAdmin);

export default router;
