import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "Resturant",
    })
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((err) => {
            console.log("MongoDB connection error", err);
        });
}

export default connectDB;