import React, { useContext } from 'react';
import { UserContext } from "../shared/global/provider/UserProvider";

export const ChangeSharedVariables = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <>
            <hr/>
            <h1>ChangeSharedVariables</h1>

            <h2>authenticatedUser innehåller: { authenticatedUser }</h2>

            <input type="text"
                   onChange={
                       event => setAuthenticatedUser(event.target.value)
                   }/>

            <button onClick={
                () => alert(localStorage.getItem('example'))
            }>getStorage</button>
            <br/>
            <hr/>
        </>
    )
}
