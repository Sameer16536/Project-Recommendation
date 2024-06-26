import express from 'express';
import { PrismaClient } from '@prisma/client';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticate);

router.post('/', async (req, res) => {
  const { projectId, section } = req.body;
  const progress = await prisma.progress.create({
    data: {
      section,
      projectId,
      completed: false,
    },
  });
  res.status(201).json({ progress });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const progress = await prisma.progress.update({
    where: { id: parseInt(id, 10) },
    data: { completed: true },
  });
  res.json({ progress });
});

export default router;
