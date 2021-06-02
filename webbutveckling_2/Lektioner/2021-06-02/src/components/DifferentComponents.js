import React, { useContext, useState } from 'react';
import './DifferentComponents.css'
import randomImage from '../shared/images/random.png'
import { UserContext } from "../shared/global/provider/UserProvider";

export const DifferentComponents = () => {

    const [myInput, setMyInput] = useState('initial värde');
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    function alertSomething() {
        alert('Something')
    }

    const alertSomethingElse = () => {
        alert('Something else')
    }

    return (
        <>
            <h1>DifferentComponents</h1>

            <h2>Listor</h2>
            <h3>Oordnad lista</h3>
            <ul>
                <li>img</li>
                <li>button</li>
                <li>h1-h6</li>
                <li>input</li>
            </ul>


            <h3>Ordnad lista</h3>
            <ol>
                <li>img</li>
                <li>button</li>
                <li>h1-h6</li>
                <li>input</li>
            </ol>
            <hr/>

            <h2>Bilder</h2>
            <img src={ randomImage } alt="Random image"/>
            <hr/>

            <h2>Headers/Titlar</h2>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h6>h6</h6>
            <h6 className="bigger-h6">h6</h6>
            <p>p</p>
            <p>brödtext</p>
            <hr/>

            <h2>Input fields</h2>

            Text: <input type="text"/><br/>
            Password: <input type="password"/><br/>
            Number: <input type="number"/><br/>
            Number: <input type="number"
                           min='-5'
                           max='5'/><br/>

            <h2>JavaScript / React</h2>

            <h3>onClick anropar en funktion</h3>
            <h4>JavaScript</h4>
            <button onClick={
                alertSomething
            }>alertSomething
            </button>
            <br/>

            <button onClick={ alertSomethingElse }>alertSomethingElse</button>
            <br/>
            <button onClick={ () => {
                alert('Arrow funktion')
            } }>Arrow funktion1
            </button>

            <button onClick={
                () => {
                    alert('Arrow funktion')
                }
            }>Arrow funktion2
            </button>
            <br/>

            <h3>useState</h3>

            <h4>{ myInput }</h4>

            MyInput: <input type="text" onChange={ event => setMyInput(event.target.value) }/>
            <button onClick={ () => setMyInput('Hulken') }>Hulken</button>
            <br/>

            <h1>DifferentComponents</h1>
            <h2>authenticatedUser innehåller: { authenticatedUser }</h2>
            <button onClick={
                () => setAuthenticatedUser('Hulken')
            }>setAuthenticatedUser to Hulken
            </button>
            <h1>DifferentComponents</h1>

            <br/>
        </>
    )
}

// const [myInput, setMyInput] = useState('Lars')
