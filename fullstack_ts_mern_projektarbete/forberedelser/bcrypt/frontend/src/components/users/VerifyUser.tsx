import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../../shared/api/UsersApi'

interface User {
	username: string,
	password: string,
}

function VerifyUser() {
	const [text, setText] = useState<string>('xxx')
	const [username, setUsername] = useState<string>('Ada')
	const [password, setPassword] = useState<string>('SecretPassword')
	
	function verifyUser() {
		const payload: User = {
			username: username,
			password: password
		}
		console.log(payload)
		http.post(`/verifyUser`, payload)
			.then(function (response) {
				console.log(response.data.message)
				setText(String(response.data.message))
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>Verifiera en användare</h1>
			
			Username: <input type='text'
							 id='name'
							 value={ username }
							 onChange={ event => setUsername(event.target.value) }/>
			<br/>
			
			Password: <input type='text'
							 id='age'
							 value={ password }
							 onChange={ event => setPassword(event.target.value) }/>
			<br/>
			
			<button onClick={ function () {
				verifyUser()
			} }>Verify user
			</button>
			<button onClick={ function () {
				setText('')
			} }>clear
			</button>
			<p>{ text }</p>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: forestgreen;
`

export default VerifyUser
