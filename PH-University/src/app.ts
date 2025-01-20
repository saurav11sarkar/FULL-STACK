import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { golobalError, pageError } from './app/middleware/globalError';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(cookieParser());

// router
app.use('/api/v1', router);




// error handler
app.use(pageError);
app.use(golobalError);

export default app;
