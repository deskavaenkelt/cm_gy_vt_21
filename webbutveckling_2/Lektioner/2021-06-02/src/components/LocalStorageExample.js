import React from 'react';

export const LocalStorageExample = () => {

    function setStorage() {
        localStorage.setItem('example', 'Hello World')
    }

    function getStorage() {
        alert(localStorage.getItem('example'))
    }

    function removeStorage() {
        localStorage.removeItem('example')
    }

    return (
        <>
            <h1>LocalStorageExample</h1>
            <button onClick={ setStorage }>setStorage</button>
            <button onClick={ getStorage }>getStorage</button>
            <button onClick={ removeStorage }>removeStorage</button>

            <br/><br/><br/><br/><br/><br/>
        </>
    )
}
