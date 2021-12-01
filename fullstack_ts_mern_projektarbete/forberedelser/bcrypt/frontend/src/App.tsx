import React, { useEffect, useState } from 'react'
import NavigationBar from './components/NavigationBar'
import { Routing } from './routes/Routing'
// import { mainRoutes } from './routes/Routing'
import { UserContext } from './shared/global/provider/UserProviderOrg'

const App: React.FC = (): JSX.Element => {
	const [authenticatedUser, setAuthenticatedUser] = useState<string>('')
	
	const checkIfUserIsAuthenticatedInBrowser = () => {
		const username = localStorage.getItem('username')
		if (typeof username === 'string') {
			setAuthenticatedUser(username)
		}
	}
	
	useEffect(() => {
		checkIfUserIsAuthenticatedInBrowser()
	}, [])
	
	
	// const routing = useRoutes([mainRoutes])
	return (
		<UserContext.Provider value={ {authenticatedUser, setAuthenticatedUser} }>
			<Routing>
				<NavigationBar/>
				{/*{ routing }*/ }
			</Routing>
		</UserContext.Provider>
	)
}

export default App
