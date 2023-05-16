// 16:24 thu apr20 2023

import { Router } from "express";
import { login, signup } from "../controllers/user.controller";

const router = Router();

router.route('/signup').post(signup);
router.post('/login', login);

export { router as userRouter };