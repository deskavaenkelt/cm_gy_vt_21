import React from 'react'
import NavigationBar from './components/NavigationBar'
import { Routing } from './routes/Routing'

function App() {
	return (
		<Routing>
			<NavigationBar/>
		</Routing>
	)
}

export default App
