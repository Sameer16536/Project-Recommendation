import express from 'express';
// import { getProgress } from '../controllers/userController';
import authenticate from '../middleware/authenticate';

const router = express.Router();

// router.get('/', authenticate, getProgress);

export default router;
