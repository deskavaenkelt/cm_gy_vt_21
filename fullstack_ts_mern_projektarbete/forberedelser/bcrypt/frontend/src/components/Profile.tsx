import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProviderOrg'
import './Profile.css'

export const Profile = () => {
	const navigate = useNavigate()
	const {authenticatedUser, setAuthenticatedUser} = useUserContext()
	
	const logout = () => {
		localStorage.removeItem('username')
		setAuthenticatedUser('')
		navigate(RoutingPath.homeView)
	}
	
	return (
		// <ProfileWrapper showOnHover={true}>
		<ProfileWrapper className='profileWrapper'>
			<Img src={ 'https://thispersondoesnotexist.com/image' } alt='Unknown person'/>
			<Span>{ authenticatedUser }</Span>
			<div className='profileDropdown'>
				<Span onClick={ () => navigate(RoutingPath.settingsView) }>Settings</Span>
				<Span onClick={ () => navigate(RoutingPath.profileView) }>Profile</Span>
				<hr/>
				<Span onClick={ () => logout() }>Logout</Span>
			</div>
		</ProfileWrapper>
	)
}

const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 64px;
`

const Img = styled.img`
  align-self: center;
  width: 50px;
  border-radius: 50%;
`

const Span = styled.span`
  display: block;
  align-self: center;
  cursor: pointer;
  padding: 5px 10px;
`

// interface ShowDropdownOnHover {
// 	showOnHover: boolean
// }
//
// const ProfileWrapper = styled.section`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   height: 64px;
//
//   & > div {
// 	&:hover {
// 	  display: ${(props: ShowDropdownOnHover) => (props.showOnHover ? 'block' : 'none')};
// 	}
//   }
// `


