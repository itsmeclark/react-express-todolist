import express from 'express'
import { addUser } from '../controllers/Register.Controller.js';

const router = express.Router();

router.post('/regis', addUser)

export default router;