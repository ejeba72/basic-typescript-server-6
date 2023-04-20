// 16:24 thu apr20 2023

import { Router } from "express";
import { signup } from "../controllers/user.controller";

const router = Router();

router.route('/signup').post(signup);

export { router as userRouter };