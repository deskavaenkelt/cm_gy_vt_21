import { createContext, useContext } from 'react'

export type AuthenticatedContent = {
	authenticatedUser: string
	setAuthenticatedUser: (c: string) => void
}

export const UserContext = createContext<AuthenticatedContent>({
	authenticatedUser: '', 			// set a default value
	setAuthenticatedUser: () => {
	}
})

export const useUserContext = () => useContext(UserContext)

// export const UserProvider: React.FC = ({children}) => {
// 	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedContent>()
//
// 	return (
// 		<UserContext.Provider value={ [authenticatedUser, setAuthenticatedUser] }>
// 			{ children }
// 		</UserContext.Provider>
// 	)
// }
