import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/');
        console.log('MongoDB Connected:mongodb://localhost:27017/')
    } catch (error) {
        console.log(error)
    }
}