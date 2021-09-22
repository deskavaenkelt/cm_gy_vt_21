import React from 'react'
import styled from 'styled-components'
import Alive from './components/Alive'
import CreateUser from './components/CreateUser'
import DeleteUser from './components/DeleteUser'
import GetUserById from './components/GetUserById'
import GetUsers from './components/GetUsers'
import UpdateUser from './components/UpdateUser'

function App() {
	return (
		<>
			<SectionTwoColumns>
				<Article>
					<H1>Users API with Axios</H1>
				</Article>
				<Alive/>
			</SectionTwoColumns>
			<SectionTwoColumns>
				<GetUsers/>
				<GetUserById/>
			</SectionTwoColumns>
			<SectionThreeColumns>
				<CreateUser/>
				<UpdateUser/>
				<DeleteUser/>
			</SectionThreeColumns>
		</>
	)
}

const H1 = styled.h1`
	font-size: 3em;
`

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  text-align: center;
  background-color: greenyellow;
`

const SectionTwoColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const SectionThreeColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export default App
