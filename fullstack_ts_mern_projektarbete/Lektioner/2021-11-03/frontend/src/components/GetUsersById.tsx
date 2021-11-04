import { useState } from 'react'
import { JsonToTable } from 'react-json-to-table'
import styled from 'styled-components'
import http from '../utils/api/UsersApi'
import { User } from '../utils/interfaces/User'

function GetUsersById() {
	const [oneUser, setOneUser] = useState<User>()
	const [id, setId] = useState<string>('616718bda4ab77e25e33ec5b')
	
	function getUsers() {
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
			<H1>Get users by id</H1>
			Id: <Input type='text'
					   value={ id }
					   onChange={ event => setId(event.target.value) }/>
			<Button onClick={ getUsers }>getUsers</Button>
			<Button onClick={ () => setOneUser(undefined) }>clear</Button>
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

const H1 = styled.h1`
  font-size: 2em;
`

const Input = styled.input`
  width: 200px;
  margin-bottom: 1em;
`

const Button = styled.button`
  padding: 0.75em 3em;
  border-radius: 1em;
  background-color: greenyellow;
  color: blueviolet;
  border-color: blueviolet;
  margin-right: 1em;

  &:hover {
    background-color: blueviolet;
    color: greenyellow;
    border-color: greenyellow;
  }
`

export default GetUsersById
