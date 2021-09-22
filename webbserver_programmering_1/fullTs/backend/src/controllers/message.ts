// Svarskommunikation från API
import { Messages, MessagesJsonFormat } from '../models/messages'
import { Users } from '../models/users'

export function messageUserNotFound() {
	let message: Messages
	message = {
		status: 404,
		text: 'User not found!'
	}
	return message
}

export function messageSuccess(text: string) {
	let message: Messages
	message = {
		status: 200,
		text
	}
	return message
}

export function messageSuccessWithJson(json: Users) {
	let message: MessagesJsonFormat
	message = {
		status: 200,
		text: json
	}
	return message
}
