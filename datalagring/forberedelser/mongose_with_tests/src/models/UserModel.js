import mongoose from "mongoose";
import dotenv from "dotenv";

// .env
dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
    },
    { timestamps: true }
)

const UserModel = mongoose.model(dbCollection, UserSchema)

export default UserModel
