import express from 'express'
import UserController from '../controllers/UserController'

const routes = (app: express.Application) => {
	const usersUrl = '/users'
	const verifyUserUrl = '/verifyUser'
	const usersUrlWithId = `${usersUrl}/:userId`
	const searchUsers = `/searchUser`

	app.get(usersUrl, UserController.getAllUsers)
	app.get(usersUrlWithId, UserController.getUserWithId)
	app.get(searchUsers, UserController.getUserWithQuery)
	app.post(usersUrl, UserController.createUser)
	app.post(verifyUserUrl, UserController.verifyUser)
	app.put(usersUrlWithId, UserController.updateUser)
	app.delete(usersUrlWithId, UserController.deleteUser)
}

export default {
	routes
}
