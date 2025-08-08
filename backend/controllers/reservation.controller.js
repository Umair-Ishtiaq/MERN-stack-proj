import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservation.model.js";

export const createReservation = async (req, res, next) => {

    const { firstName, lastName, email, phone, time, date } = req.body;

    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("All fields are required", 400));
    }

    try {
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });

        res.status(200).json({
            success: true,
            message: "Reservation created successfully",
            reservation
        });
    }
    catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(new ErrorHandler(error.message, 500));
    }

}

