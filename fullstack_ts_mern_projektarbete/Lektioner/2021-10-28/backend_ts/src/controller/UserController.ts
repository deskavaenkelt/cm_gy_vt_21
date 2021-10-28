import { CreateUser, ReadUser } from '../models/Users'

// Här finns databas-relaterat
let currentId: number = 14

function incrementCurrentIdByOne() {
	currentId += 1
}

const inMemoryDatabase: ReadUser[] = [
	{
		id: 10,
		name: 'Adam',
		age: 12,
		gender: 'Male'
	},
	{
		id: 11,
		name: 'Bengtina',
		age: 24,
		gender: 'Other'
	},
	{
		id: 12,
		name: 'Cecilia',
		age: 36,
		gender: 'Female'
	},
	{
		id: 13,
		name: 'David',
		age: 48,
		gender: 'Male'
	},
]

function getAllUsers(req: any, res: { json: (arg0: ReadUser[]) => any }) {
	return res.json(inMemoryDatabase)
}



export {
	getAllUsers
}
