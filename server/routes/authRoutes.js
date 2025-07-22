import express from 'express';
import {
    loginUser,
    registerUser,
    verifyUser,
} from '../controllers/authController.js';


const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get("/verify",verifyUser)
export default router;