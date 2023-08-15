import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createReading } from '../controllers/glucoReadingController.js';

const router = express.Router();

router.post('/', protect, createReading);

export default router;