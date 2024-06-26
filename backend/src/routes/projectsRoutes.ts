// projects.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import authenticate from '../middleware/authenticate';

const router = express.Router();
const prisma = new PrismaClient();
router.use(authenticate)
// GET /projects
router.get('/', async (req, res) => {
  const { level } = req.query;

  try {
    const projects = await prisma.project.findMany({ where: { level: level as string } });
    res.json(projects);
  } catch (error) {
    console.error('Fetch projects error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { name, description, level, image } = req.body;
  const userId = (req as any).userId;
  const project = await prisma.project.create({
    data: {
      name,
      description,
      level,
      image,
      userId,
    },
  });
  res.status(201).json({ project });
});

export default router;
