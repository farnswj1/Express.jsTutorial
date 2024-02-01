import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import Router from 'routes';

dotenv.config();

const PORT = parseInt(process.env.PORT as string, 10) || 8000;

const app: Express = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(Router);
app.set('trust proxy', true);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
