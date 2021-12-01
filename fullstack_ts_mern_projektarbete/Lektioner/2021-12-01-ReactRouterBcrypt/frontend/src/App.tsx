import React, { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import { Routing } from './routes/Routing'
import { UserContext } from './shared/global/provider/UserProvider'

function App() {
	const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

	return (
		<UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser}}>
			<Routing>
				<NavigationBar/>
			</Routing>
		</UserContext.Provider>
	)
}

export default App
