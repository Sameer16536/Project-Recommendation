import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectsRoutes';
import progressRoutes from './routes/progressRoutes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/progress', progressRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
