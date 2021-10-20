import UserController from "../controllers/UserController.js";

const routes = (app) => {
    const usersUrl = '/users'
    const usersUrlWithId = `${usersUrl}/:userId`
    const searchUsers = `/searchUser`

    app.get(usersUrl, UserController.getAllUsers)
    app.get(usersUrlWithId, UserController.getUserWithId)
    app.get(searchUsers, UserController.getUserWithQuery)
    app.post(usersUrl, UserController.createUser)
    app.put(usersUrlWithId, UserController.updateUser)
    app.delete(usersUrlWithId, UserController.deleteUser)
}

export default {
    routes
}
