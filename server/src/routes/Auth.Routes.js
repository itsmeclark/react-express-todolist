import express from 'express'
import { addUser, findUser, getUser, logoutUser } from '../controllers/Auth.Controller.js';

const router = express.Router();

router.post('/regis', addUser)
router.post('/login', findUser)
router.get('/logout', logoutUser)

export default router;