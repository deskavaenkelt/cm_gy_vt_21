import UserModel from '../models/UserModel'
import Logger from '../utils/Logger'
import StatusCode from '../configuration/StatusCode'
import { Request, Response } from 'express'

interface CreateUser {
	username: string;
	password: string;
}
//
// interface CreateUserBody {
// 	body: CreateUser
// }
//
// interface Response {
// 	status: any;
// 	send: {
// 		message: any;
// 	};
// }

const createUser = async (req: Request, res: Response) => {
	Logger.http(req.body)
	const {username, password} : CreateUser = req.body
	const user = new UserModel({
		username,
		password
	})
	Logger.debug(user)
	try {
		const response = await user.save()
		Logger.debug(response)
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
	}
}

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const response = await UserModel.find()
		// const response = new Promise(() => UserModel.find())
		// await response
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
	}
}

const getUserWithId = async (req: Request, res: Response) => {
	try {
		Logger.debug(`req.params.userId: ${ req.params.userId }`)
		const {userId} = req.params
		const response = await UserModel.findById(userId)
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occurred while trying to retrieve user with ID: ${ req.params.userId }`,
			error: error.message
		})
	}
}

interface SearchUser {
	username: string;
}

const getUserWithQuery = async (req: Request, res: Response) => {
	try {
		Logger.debug(`req.query.username: ${ req.query.username }`)
		const {username} = req.query
		const query: SearchUser = {username: String(username)}
		const response = await UserModel.find(query)
		Logger.debug(response)
		response.length !== 0
			? res.status(StatusCode.OK).send(response)
			: res.status(StatusCode.NOT_FOUND).send({message: `Couldn't find user with username: ${ req.query.username }`})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occurred while trying to retrieve user with username: ${ req.query.username }`,
			error: error.message
		})
	}
}

const updateUser = async (req: Request, res: Response) => {
	try {
		Logger.debug(`req.params.userId: ${ req.params.userId }`)
		const {userId} = req.params
		Logger.debug(`req.body: ${ req.body }`)
		const {username, password} = req.body
		if (!req.body) {
			res.status(StatusCode.BAD_REQUEST).send({message: `Can't update with empty values!`})
		}
		const response = await UserModel.findByIdAndUpdate(userId, {
			username,
			password
		}, {new: true})
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occurred while trying to values of the user with ID: ${ req.params.userId }`,
			error: error.message
		})
	}
}

const deleteUser = async (req: Request, res: Response) => {
	try {
		const {userId} = req.params
		const response = await UserModel.findByIdAndDelete(userId)
		res.status(StatusCode.OK).send({
			message: `Successfully deleted user with username: ${ response.username } and ID: ${ req.params.userId }`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: `Error occurred while trying to delete the user with ID: ${ req.params.userId }`,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithQuery,
	updateUser,
	deleteUser
}
