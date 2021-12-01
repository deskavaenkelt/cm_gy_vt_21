import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PrimaryButton } from '../components/CustomButtonComponent'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProvider'

export const SignInView = () => {
	const [username, setUsername] = useState<string>()
	const [password, setPassword] = useState<string>()
	const {authenticatedUser, setAuthenticatedUser} = useUserContext()
	
	const navigate = useNavigate()
	
	const login = () => {
		if (typeof username === 'string') {
			setAuthenticatedUser(username)
			localStorage.setItem('username', username)
			navigate(RoutingPath.homeView)
		}
	}
	
	return (
		<Wrapper>
			<h1>Sign In</h1>
			<GridContainer>
				<span>{ username }</span>
				<span>{ password }</span>
				<Span>Username: </Span>
				<input type='text' onChange={ event => setUsername(event.target.value) }/>
				<Span>Password: </Span>
				<input type='password' onChange={ event => setPassword(event.target.value) }/>
			</GridContainer>
			<PrimaryButton onClick={ () => login() } children={ 'Log In' }/>
			<PrimaryButton onClick={ () => alert(authenticatedUser) } children={ 'Show user' }/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  text-align: center;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  grid-gap: 5px;
`

const Span = styled.span`

`
