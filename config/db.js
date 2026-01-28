import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Yasas:Yasas123@cluster0.0mwapoj.mongodb.net/?appName=Cluster0').then(() => console.log('Connected to MongoDB'));
}