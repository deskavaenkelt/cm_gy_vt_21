export interface UserDataObject {
	_id: string;
	username: string;
	password: string;
	createdAt: string;
	updatedAt: string;
}

export interface CreateUserObject {
	username: string;
	password: string;
}
