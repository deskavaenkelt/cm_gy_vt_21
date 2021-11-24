import { Schema, model } from 'mongoose'
import dotenv from 'dotenv'

// 1. .env
dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

// 2. Create an interface representing a document in MongoDB.
interface User {
	username: string;
	password: string;
}

// 3. Create a Schema corresponding to the document interface.
const schema = new Schema<User>({
		username: {type: String, required: true},
		password: {type: String, required: true},
	},
	{timestamps: true}
)

// 4. Create a Model.
const UserModel = model<User>(dbCollection, schema)

export default UserModel
