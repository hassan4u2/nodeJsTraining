import { Router } from "express";
import * as authController from "./controller/auth.js";

const router = Router();

router.get("/", authController.homePage);
router.post("/signup", authController.userSignUp);
router.post("/login", authController.userLogin);


export {
    router
}