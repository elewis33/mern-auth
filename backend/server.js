import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.get('/', (req, res) => res.send('Server is ready'));
app.listen(port, () => console.log(`Server started on port ${port}`));
