import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import StatusCode from "../src/configuration/StatusCode.js"
import app from "../src/Server.js"

Chai.should()       // Instantiate Chai
Chai.use(ChaiHTTP)  // Test against an API

const randomString = Math.random().toString(36).substring(7)
let userId = '617074eef5daa51fe7853952'
const user = {
    username: randomString,
    password: randomString,
}

const usersRoute = '/users'
const usersRouteWithId = `${usersRoute}/:userId`
const searchUsersRoute = `/searchUser`

const testingNonExistingRoute = () => {
    describe('Test a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${ randomString }`)
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.NOT_FOUND)
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('Testing CREATE(POST) method for a user entity', () => {
        test('Expecting a user to be created', (done) => {
            Chai.request(app)
                .post(usersRoute)
                .send(user)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.a('object')
                    userId = response.body._id
                    response.body.should.have.property('username').eq(user.username)
                    response.body.should.have.property('password').eq(user.password)
                    done()
                })
        })
    })
}
const getAllUsers = () => {
    describe('Fetching all users', () => {
        test('Expecting to return all users(GET)', (done) => {
            Chai.request(app)
                .get(usersRoute)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}
const updateUser = () => {
    describe('Updating(PUT) a user in the database', () => {
        test('Expecting a user to be updated', (done) => {
            Chai.request(app)
                .put(`${usersRoute}/${userId}`)
                .send(user)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(userId)
                    response.body.should.have.property('username').eq(user.username)
                    response.body.should.have.property('password').eq(user.password)
                    done()
                })
        })
    })
}
const deleteUser = () => {
    describe('Deleting(DELETE) a user in the database', () => {
        test('Expecting a user to be delete', (done) => {
            Chai.request(app)
                .delete(`${usersRoute}/${userId}`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
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
