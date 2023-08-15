import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createReading, getAllReadings } from '../controllers/glucoReadingController.js';

const router = express.Router();

router.post('/', protect, createReading);
router.get('/', protect, getAllReadings);

export default router;