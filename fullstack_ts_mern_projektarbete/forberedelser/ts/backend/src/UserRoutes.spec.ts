// import Chai from 'chai'
// import 'mocha'
// import StatusCode from './configuration/StatusCode'
// import app from './Server'
// import chaiHttp = require('chai-http')
//
// Chai.use(chaiHttp)
// const expect = Chai.expect
//
// const randomString = Math.random().toString(36).substring(7)
// const userId = '617074eef5daa51fe7853952'
// const user = {
// 	username: randomString,
// 	password: randomString,
// }
//
// const usersRoute = '/users'
// const usersRouteWithId = `${usersRoute}/:userId`
// const searchUsersRoute = `/searchUser`
//
// const testingNonExistingRoute = () => {
// 	describe('Test a route that does not exist', () => {
// 		it('Expecting 404 not found', (done) => {
// 			return Chai.request(app).get(`/${ randomString }`)
// 				.end((request, response) => {
// 					response.should.have.status(StatusCode.NOT_FOUND)
// 					done()
// 				})
// 		})
// 	})
// }
//
//
// function createUser() {
//
// }
//
// function getAllUsers() {
//
// }
//
// function updateUser() {
//
// }
//
// function deleteUser() {
//
// }
//
// describe('TESTING THE USER_API ROUTE', () => {
// 	testingNonExistingRoute()
// 	createUser()
// 	getAllUsers()
// 	updateUser()
// 	deleteUser()
// })
