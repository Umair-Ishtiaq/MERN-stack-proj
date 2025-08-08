import express from 'express';
import { createReservation } from '../controllers/reservation.controller.js';

const router = express.Router();

router.post('/send', createReservation);
export default router;