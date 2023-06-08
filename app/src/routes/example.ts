import { Router, Request, Response } from 'express';
import { INumbers } from '../types';

const router = Router();

router.get('/', async (request: Request, response: Response) => {
  response.status(200).json({ text: 'Hello world!' });
});

router.get('/ip', async (request: Request, response: Response) => {
  const { ip } = request;
  response.status(200).json({ ip });
});

router.post('/add', async (request: Request, response: Response) => {
  const numbers: INumbers = request.body;
  const { a, b } = numbers;
  response.status(200).json({ sum: a + b });
});

export default router;
