"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devRoute = void 0;
// import { Router, Request, Response } from 'express';
const express_1 = __importDefault(require("express"));
const dev_controller_1 = require("../controllers/dev.controller");
// const router = Router();
const router = express_1.default.Router();
exports.devRoute = router;
// router.get('/', (req: Request, res: Response) => {
router.get('/', dev_controller_1.devController);
