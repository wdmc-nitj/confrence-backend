import express, {Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import specs from './config/docs';
import dotenv from 'dotenv';
import verifyAdmin from './utils/middleware';
// routes import

import conf from './routes/conf';
import home from './routes/home';
import participant from './routes/participant';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(verifyAdmin);


app.use('/conf', conf);
app.use('/home', home);
app.use('/participant', participant);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at promise', promise, `reason: ${reason}`);
  process.exit(1); //mandatory (as per the Node.js docs)
});

