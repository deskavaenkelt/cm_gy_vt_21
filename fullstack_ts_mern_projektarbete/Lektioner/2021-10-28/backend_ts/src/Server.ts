import Configuration from './configuration/Configuration'
import ExpressApp from './configuration/ExpressApp'

ExpressApp.get('/', (req, res) => {
	res.send('API is Alive with TypeScript! and Nodemon')
})

Configuration.connectToPort()
