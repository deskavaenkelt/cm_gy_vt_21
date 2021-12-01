import React, { useEffect } from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Navigate, Routes } from 'react-router-dom'
import { useUserContext } from '../shared/global/provider/UserProviderOrg'
import { AxiosView } from '../view/AxiosView'
import { CounterView } from '../view/CounterView'
import { HomeView } from '../view/HomeView'
import { PageNotFoundView } from '../view/PageNotFoundView'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'
import { SignInView } from '../view/SignInView'
import UsersView from '../view/UsersView'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children?: React.ReactChild }) => {
	const {authenticatedUser, setAuthenticatedUser} = useUserContext()
	
	const checkIfUserIsAuthenticatedInBrowser = () => {
		const username = localStorage.getItem('username')
		if (typeof username === 'string') {
			setAuthenticatedUser(username)
		}
	}
	
	const blockRouteIfAuthenticated = (navigateToView: any) => {
		return authenticatedUser ? <HomeView/> : navigateToView
	}
	
	const blockRouteIfNotAuthenticated = (navigateToView: any) => {
		return !authenticatedUser ? <SignInView/> : navigateToView
	}
	
	useEffect(() => {
		checkIfUserIsAuthenticatedInBrowser()
	})
	
	return (
		<BrowserRouter>
			{ props.children }
			<Routes>
				<Route path={ RoutingPath.wildCardView } element={ <Navigate to={ RoutingPath.notFoundView }/> }/>
				<Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
				<Route path={ RoutingPath.counterView } element={ <CounterView/> }/>
				<Route path={ RoutingPath.signInView } element={ blockRouteIfAuthenticated(<SignInView/>) }/>
				<Route path={ RoutingPath.profileView } element={ blockRouteIfNotAuthenticated(<ProfileView/>) }/>
				<Route path={ RoutingPath.settingsView } element={ blockRouteIfNotAuthenticated(<SettingsView/>) }/>
				<Route path={ RoutingPath.axiosView } element={ blockRouteIfNotAuthenticated(<AxiosView/>) }/>
				<Route path={ RoutingPath.usersView } element={ blockRouteIfNotAuthenticated(<UsersView/>) }/>
				<Route path={ RoutingPath.notFoundView } element={ <PageNotFoundView/> }/>
			</Routes>
		</BrowserRouter>
	)
}


// const mainRoutes = {
// 	path: '/',
// 	element: <NavigationBar/>,
// 	children: [
// 		{path: RoutingPath.wildCardView, element: <Navigate to='/404'/>},
// 		{path: RoutingPath.homeView, element: <HomeView/>},
// 		{path: RoutingPath.counterView, element: <CounterView/>},
// 		{path: RoutingPath.signInView, element: <SignInView/>},
// 		{path: RoutingPath.profileView, element: <ProfileView/>},
// 		{path: RoutingPath.settingsView, element: <SettingsView/>},
// 		{path: RoutingPath.notFoundView, element: <PageNotFoundView/>}
// 	]
// }
//
// export {
// 	mainRoutes,
// }
