import { Request, Response } from 'express';
import prisma from '../models';
import {AuthenticatedRequest} from '../middleware/authenticate';


export const getProjects = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const projects = await prisma.project.findMany();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Fetch projects error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addProject = async (req: AuthenticatedRequest, res: Response) => {
  const { name, description, image, level } = req.body;
  if (req.userId === undefined) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        image,
        level,
        userId: req.userId
      }
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error('Add project error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
