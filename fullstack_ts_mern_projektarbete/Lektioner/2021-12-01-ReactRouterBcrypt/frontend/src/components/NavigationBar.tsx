import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProvider'

const NavigationBar = () => {
	const {authenticatedUser} = useUserContext()

	return (
		<>
			<nav>
				<Ul>
					<LiLeft><Link to={ RoutingPath.homeView }>Home</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.counterView }>Counter</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.somethingElseView }>Not found</Link></LiLeft>
					<LiRight><Link to={ RoutingPath.signInView }>Sign In</Link></LiRight>
					<LiRight><Span>{ authenticatedUser }</Span></LiRight>
				</Ul>
			</nav>
			<Outlet/>
		</>
	)
}

export default NavigationBar

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const LiLeft = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
`

const LiRight = styled.li`
  float: right;
  width: 200px;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
`

const Span = styled.span`
  color: yellowgreen;
`
