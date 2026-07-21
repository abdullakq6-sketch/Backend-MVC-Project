import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import userRouter from './router/userRouter.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

connectDatabase();

app.get('/', (req, res) => {
  res.send('Backend chal raha hai!');
});

const data = [];

app.post('/post-data', (req, res) => {
  res.status(201).send({ data: req.body, message: "data posted" });
  data.push(req.body);
});

app.get('/api/users', (req, res) => {
  res.json(data);
});

app.use('/api/auth', userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));