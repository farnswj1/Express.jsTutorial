import { Router } from 'express';
import ExampleRouter from './example';

const router = Router();
router.use(ExampleRouter);

export default router;
