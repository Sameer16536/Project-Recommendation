import express from 'express';
// import { getUser, deleteUser } from '../controllers/userController';
import authenticate from '../middleware/authenticate';

const router = express.Router();

// router.get('/:id', authenticate, getUser);
// router.delete('/:id', authenticate, deleteUser);

export default router;
