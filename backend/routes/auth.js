import express from 'express';  
import { register, login, gemini } from '../Controllers/authController.js'; 
const router= express.Router();

router.post('/register', register);
router.post('/login', login);
// router.post('/delete', deleteUser);
router.post('/chat',gemini);

export default router;