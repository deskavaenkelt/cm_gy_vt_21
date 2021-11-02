import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'
import { JsonToTable } from 'react-json-to-table'

interface User {
	id: number;
	name: string,
	age: number,
	gender: string,
}

function GetUserById() {
	const [oneUser, setOneUser] = useState<User>()
	const [id, setId] = useState<string>('616718bda4ab77e25e33ec5b')
	
	function getUserById() {
		http.get<User>(`/users/${ id }`)
			.then(function (response) {
				console.log(response.data)
				setOneUser(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}
	
	return (
		<Article>
			<h1>Hämta en användare</h1>
			Id: <Input type='text'
					   id='id'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			<button onClick={ function () {
				getUserById()
			} }>getUser
			</button>
			<button onClick={ function () {
				setOneUser(undefined)
			} }>clear
			</button>
			<br/>
			<JsonToTable json={ oneUser }/>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: cadetblue;
`

const Input = styled.input`
  width: 200px;
`

export default GetUserById
