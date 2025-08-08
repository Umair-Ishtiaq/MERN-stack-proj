import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: [2, "First name must be at least 2 characters"],
        maxLength: [50, "First name must be at most 50 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [2, "Last name must be at least 2 characters"],
        maxLength: [50, "Last name must be at most 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [10, "Phone number must be at least 10 digits"],
        maxLength: [15, "Phone number must be at most 15 digits"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    }
})


export const Reservation = mongoose.model("Reservation", reservationSchema);