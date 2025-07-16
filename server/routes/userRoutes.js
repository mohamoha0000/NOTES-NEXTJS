import express from 'express';
import { getProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', getProfile);  // /user/profile

export default router;
