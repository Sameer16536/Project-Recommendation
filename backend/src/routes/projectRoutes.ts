import express from 'express';
import { getProjects, addProject } from '../controllers/projectController';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getProjects);
router.post('/add', authenticate, addProject);

export default router;
