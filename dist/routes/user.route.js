"use strict";
// 16:24 thu apr20 2023
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
exports.userRouter = router;
router.route('/signup').post(user_controller_1.signup);
