import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Logotype from '../shared/images/undraw_content_creator_re_pt5b.svg'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProviderOrg'
import { Profile } from './Profile'

const NavigationBar: React.FC = (): JSX.Element => {
	const {authenticatedUser, } = useUserContext()
	
	const displayUserIfAuthenticated = () => {
		return (authenticatedUser)
			? <LiRight><Profile/></LiRight>
			: <LiRight><Link to={ RoutingPath.signInView }>Sign In</Link></LiRight>
	}
	
	return (
		<>
			<nav>
				<Ul>
					<LiLeft><Link to={ RoutingPath.homeView }><Img src={ Logotype } alt='Error...'/></Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.counterView }>Counter</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.somethingElseView }>Not Found</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.axiosView }>Axios</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.usersView }>Users</Link></LiLeft>
					{ displayUserIfAuthenticated() }
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

const Img = styled.img`
  width: 50px;
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

  a:hover:not(.active) {
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

  a:hover:not(.active) {
    background-color: #111;
  }
`
