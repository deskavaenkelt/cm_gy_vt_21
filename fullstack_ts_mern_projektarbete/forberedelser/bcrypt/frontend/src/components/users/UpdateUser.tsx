import React, { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import http from '../../shared/api/UsersApi'

interface User {
	username: string,
	password: string,
}

function UpdateUser() {
	const [text, setText] = useState<string>('')
	const [id, setId] = useState<string>('')
	const [username, setUsername] = useState<string>('Ada')
	const [password, setPassword] = useState<string>('NewSecretPassword')
	
	function updateUser() {
		const payload: User = {
			username: username,
			password: password,
		}
		console.log(payload)
		http.put(`/users/${id}`, payload)
			.then(function (response) {
				console.log(response.data)
				setText(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>Uppdatera en användare</h1>
			
			Id: <input type='text'
					   id='id'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			<br/>
			
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
				updateUser()
			} }>Update user
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
  background-color: hotpink;
`

export default UpdateUser
