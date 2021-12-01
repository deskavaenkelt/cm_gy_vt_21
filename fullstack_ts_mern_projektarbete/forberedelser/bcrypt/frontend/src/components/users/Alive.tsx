import React, { useState } from 'react'
import styled from 'styled-components'
import http from '../../shared/api/UsersApi'

const debug = require('debug')('http')

function Alive() {
	const initialServerStatus = 'Check server status'
	const [text, setText] = useState<string>(initialServerStatus)
	
	function alive() {
		http.get('/')
			.then(function (response) {
				debug('debug', response.data)
				console.log('console.log', response.data)
				setText(response.data)
			})
			.catch(function (error) {
				// handle error
				debug('debug', error)
				console.log('console.log', error)
				return 'Error'
			})
			.then(function () {
				// always executed
			})
	}
	
	return (
		<Article>
			<H1>Alive function</H1>
			<h2>{ text }</h2>
			<Button onClick={ alive }>alive</Button>
			<Button onClick={ () => setText(initialServerStatus) }>clear</Button>
		</Article>
	)
}

const Article = styled.article`
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: lightseagreen;
`

const H1 = styled.h1`
	font-size: 2em;
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

export default Alive
