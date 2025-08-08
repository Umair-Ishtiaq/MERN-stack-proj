import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/dbConnection.js';// Assuming this file sets up the database connection
import ErrorHandler, { errorMiddleware } from './error/error.js';
import reservationRoutes from './routes/reservation.route.js'; // Import your reservation routes

const app = express();

dotenv.config({ path: './config/.env' });

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        methods: ['POST'],
        credentials: true,
    }
));

express.json(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/vl/reservations', reservationRoutes); // Use the reservation routes
connectDB(); // Connect to the database

app.use(errorMiddleware)
export default app;