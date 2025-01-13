import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const url = process.env.REACT_APP_DATABASE_URL || "";

export const connect = async () => {
    try {
        await mongoose.connect(url);
        const db = mongoose.connection.db;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export interface UserInterface {
    password: string;
    email :String,
}

const UserSchema = new mongoose.Schema<UserInterface>({
    password: { type: String, required: true },
    email : { type: String, required: true},
});

const users = mongoose.model<UserInterface>('users', UserSchema , "users");

export { users };