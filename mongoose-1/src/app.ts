import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouts } from './app/modules/students/student.router';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application route
app.use(StudentRouts);

// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('Hello world');
// });

export default app;
