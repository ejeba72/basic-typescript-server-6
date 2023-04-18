// import { Router, Request, Response } from 'express';
import express from 'express';
import { devController } from '../controllers/dev.controller';

// const router = Router();
const router: express.Router = express.Router();

// router.get('/', (req: Request, res: Response) => {
router.get('/', devController);

export { router as devRoute };