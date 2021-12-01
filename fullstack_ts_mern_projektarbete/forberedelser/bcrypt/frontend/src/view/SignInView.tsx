import React, { useState } from 'react'
import http from '../shared/api/UsersApi'
import { useUserContext } from '../shared/global/provider/UserProviderOrg'
import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { AuthenticatedUser } from '../shared/interface/Interface'

export const SignInView = () => {
	const navigate = useNavigate()
	
	const [username, setUsername] = useState<string>('Ada')
	const [password, setPassword] = useState<string>('SecretPassword')
	const {setAuthenticatedUser} = useUserContext()
	
	function verifyUser() {
		const payload: AuthenticatedUser = {
			username: username,
			password: password
		}
		console.log(payload)
		http.post(`/verifyUser`, payload)
			.then(function (response) {
				console.log(response.data.message)
				login(response.data.message)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	const login = (apiResponse: boolean) => {
		if (apiResponse) {
			setAuthenticatedUser(username)
			localStorage.setItem('username', username)
			navigate(RoutingPath.homeView)
		}
	}
	
	return (
		<>
			<h1>{ username }</h1>
			<span>Username: </span><input type='text' onChange={ event => setUsername(event.target.value) }/><br/>
			<span>Password: </span><input type='text' onChange={ event => setPassword(event.target.value) }/><br/>
			<button onClick={ () => verifyUser() }>Login</button>
		</>
	)
}
