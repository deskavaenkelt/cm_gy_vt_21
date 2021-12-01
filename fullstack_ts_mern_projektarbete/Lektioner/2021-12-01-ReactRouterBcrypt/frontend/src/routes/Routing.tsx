import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Navigate, Routes } from 'react-router-dom'
import CounterView from '../view/CounterView'
import HomeView from '../view/HomeView'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children?: React.ReactChild }) => {
	
	return (
		<BrowserRouter>
			{ props.children }
			<Routes>
				<Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
				<Route path={ RoutingPath.counterView } element={ <CounterView/> }/>
			</Routes>
		</BrowserRouter>
	)
}
