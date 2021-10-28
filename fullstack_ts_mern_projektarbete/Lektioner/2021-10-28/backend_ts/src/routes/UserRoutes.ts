import { getAllUsers } from '../controller/UserController'
import ExpressApp from '../configuration/ExpressApp'

const usersUrl = '/users'

const routes = () => {
	ExpressApp.get(usersUrl, getAllUsers)

}

export default {
	routes
}
