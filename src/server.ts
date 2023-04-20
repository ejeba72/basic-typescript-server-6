// I perceive it is redundant to explicitly indicate the types in an express server, but I'm doing so for the sake of learning TypeScript as well as deepen my understanding of the various data types.

import path from 'path';
import express, { Application } from 'express';
import { config } from 'dotenv';
import { devRoute } from './routes/dev.route';
import { userRouter } from './routes/user.route';
// import { publicRouter } from './routes/public.route';

config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public', publicRouter);
app.use('/users', userRouter);
app.use('/dev', devRoute);

app.listen(PORT, (): void => {
    console.log(`Server is attentively listening for requests @ http://127.0.0.1:${PORT}`);
});