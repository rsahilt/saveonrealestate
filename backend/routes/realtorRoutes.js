import express from 'express';
import { getRealtors } from '../controllers/realtorController.js';

const router = express.Router();

router.get('/', getRealtors);

export default router;