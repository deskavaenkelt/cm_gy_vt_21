import { Users } from './users'

export interface Messages {
	status: number,
	text: string
}

export interface MessagesJsonFormat {
	status: number,
	text: Users
}
