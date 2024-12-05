import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { golobalError, pageError } from './app/middleware/globalError';
import router from './app/routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// router
app.use('/api/v1', router);


// error handler
app.use(pageError);
app.use(golobalError);

export default app;
