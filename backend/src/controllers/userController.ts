import { Request, Response } from 'express';
import prisma from '../models';

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.status(200).json(user);
  } catch (error) {
    console.error('Fetch user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getProgress = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userId;

  try {
    const progress = await prisma.user.findMany({
      where: {
        id: Number(userId)
      }
    });
    res.status(200).json(progress);
  } catch (error) {
    console.error('Fetch progress error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
