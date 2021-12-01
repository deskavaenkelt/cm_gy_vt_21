import React, { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import http from '../../shared/api/UsersApi'

interface User {
	username: string,
	password: string,
}

function CreateUser() {
	const [text, setText] = useState<string>('')
	const [username, setUsername] = useState<string>('Ada')
	const [password, setPassword] = useState<string>('SecretPassword')
	
	function createUser() {
		const payload: User = {
			username: username,
			password: password,
		}
		http.post('/users', payload)
			.then(function (response) {
				console.log(response.data)
				// setText(`${response.data.username} created!`)
				setText(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>Skapa en användare</h1>
			
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
				createUser()
			} }>Create user
			</button>
			<button onClick={ function () {
				setText('')
			} }>clear
			</button>
			{/*<p>{ text }</p>*/}
			<JsonToTable json={ text }/>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: pink;
`

export default CreateUser
