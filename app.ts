import express, {Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import specs from './config/docs';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import verifyAdmin from './utils/middleware';
// routes import

// import awards from './routes/awards';
import conf from './routes/conf';
// import eventDate from './routes/eventDate';
import home from './routes/home';
import navbar from './routes/navbar';
import participant from './routes/participant';
// import sponsorsRouter from './routes/sponsors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(verifyAdmin);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);


// app.use('/awards', awards);
app.use('/conf', conf);
// app.use('/eventDates', eventDate);
app.use('/home', home);
app.use('/navbar', navbar);
app.use('/participant', participant);
// app.use('/sponsors', sponsorsRouter);

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

