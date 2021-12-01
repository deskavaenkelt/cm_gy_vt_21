import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

const NavigationBar = () => {
	return (
		<>
			<nav>
				<Ul>
					<Li><Link to={ RoutingPath.homeView }>Home</Link></Li>
					<Li><Link to={ RoutingPath.counterView }>Counter</Link></Li>
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

const Li = styled.li`
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
