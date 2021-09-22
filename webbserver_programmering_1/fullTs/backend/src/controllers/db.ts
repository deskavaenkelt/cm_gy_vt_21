import { CreateUser, Users } from '../models/users'
import { messageSuccess, messageSuccessWithJson, messageUserNotFound } from './message'

// Har finns databas relaterat
let currentId = 14

export function incrementCurrentIdByOne() {
	currentId += 1
}

export let inMemoryDatabase: Users[] = [
	{
		id: 10,
		name: 'Adam',
		age: 12,
		gender: 'Male',
	},
	{
		id: 11,
		name: 'Bengtina',
		age: 24,
		gender: 'Female',
	},
	{
		id: 12,
		name: 'Cecilia',
		age: 36,
		gender: 'Female',
	},
	{
		id: 13,
		name: 'David',
		age: 48,
		gender: 'Male',
	},
]

// Sök i databasen
export function getUserIndex(id:number) {
	for (let i = 0; i < inMemoryDatabase.length; i++) {
		if (inMemoryDatabase[i].id === id) {
			return i
		}
	}
	return -1
}

export function createNewUser(userData:CreateUser) {
	// tslint:disable-next-line:no-console
	console.log(userData)
	const user = {
		id: currentId,
		name: userData.name,
		age: Number(userData.age),
		gender: userData.gender,
	}
	incrementCurrentIdByOne()
	inMemoryDatabase.push(user)
}

export function getAllUsers() {
	return inMemoryDatabase
}

export function getUserById(id:number) {
	const index = getUserIndex(id)

	if (index === -1) {
		return messageUserNotFound()
	} else {
		return messageSuccessWithJson(inMemoryDatabase[index])
	}
}

export function updateUser(userData:Users) {
	const index = getUserIndex(Number(userData.id))

	if (index === -1) {
		return messageUserNotFound()
	} else {
		if (inMemoryDatabase[index].name !== userData.name) {
			inMemoryDatabase[index].name = userData.name;
		}
		if (inMemoryDatabase[index].age !== userData.age) {
			inMemoryDatabase[index].age = Number(userData.age)
		}
		if (inMemoryDatabase[index].gender !== userData.gender) {
			inMemoryDatabase[index].gender = userData.gender
		}

		return messageSuccess('User updated!')
	}
}

export function deleteUser(index:number) {
	inMemoryDatabase.splice(index, 1)
}

export function deleteUserById(id:number) {
	const index = getUserIndex(id)

	if (index === -1) {
		return messageUserNotFound()
	} else {
		deleteUser(index)
		return messageSuccess('User deleted!')
	}
}
