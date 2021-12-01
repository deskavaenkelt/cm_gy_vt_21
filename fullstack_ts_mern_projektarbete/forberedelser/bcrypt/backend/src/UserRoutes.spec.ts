import Chai from 'chai'
import 'mocha'
import StatusCode from './configuration/StatusCode'
import app from './Server'
import chaiHttp = require('chai-http')

Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
let userId = '617074eef5daa51fe7853952'
const user = {
	username: randomString,
	password: randomString,
}

const usersRoute = '/users'
const usersRouteWithId = `${ usersRoute }/:userId`
const searchUsersRoute = `/searchUser`

const testingNonExistingRoute = () => {
	describe('Test a route that does not exist', () => {
		it('Expecting 404 not found', () => {
			return Chai.request(app).get(`/${ randomString }`)
				.then(res => {
					expect(res.status).to.equal(StatusCode.NOT_FOUND)
				})
		})
	})
}

function createUser() {
	describe('Testing CREATE(POST) method for a user entity', () => {
		it('Expecting a user to be created', (done) => {
			Chai.request(app)
				.post(usersRoute)
				.send(user)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.CREATED)
					expect(response.body).be.a('object')
					userId = response.body._id
					expect(response.body).have.property('username').eq(user.username)
					expect(response.body).have.property('password').eq(user.password)
					done()
				})
		})
	})
}

function getAllUsers() {
	describe('Fetching all users', () => {
		it('Expecting to return all users(GET)', (done) => {
			Chai.request(app)
				.get(usersRoute)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body).be.a('array')
					expect(response.body.length).be.eq(response.body.length)
					done()
				})
		})
	})
}

function updateUser() {
	describe('Updating(PUT) a user in the database', () => {
		it('Expecting a user to be updated', (done) => {
			Chai.request(app)
				.put(`${ usersRoute }/${ userId }`)
				.send(user)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body).be.a('object')
					expect(response.body).have.property('_id').eq(userId)
					expect(response.body).have.property('username').eq(user.username)
					expect(response.body).have.property('password').eq(user.password)
					done()
				})
		})
	})
}

function deleteUser() {
	describe('Deleting(DELETE) a user in the database', () => {
		it('Expecting a user to be delete', (done) => {
			Chai.request(app)
				.delete(`${ usersRoute }/${ userId }`)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER_API ROUTE', () => {
	testingNonExistingRoute()
	createUser()
	getAllUsers()
	updateUser()
	deleteUser()
})
