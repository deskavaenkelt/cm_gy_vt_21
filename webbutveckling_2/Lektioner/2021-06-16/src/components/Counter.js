import React, { useState } from "react";
import './Counter.css';

export default function Counter() {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue)
    }

    const subtractFromCounter = () => {
        setCounterValue(counterValue - inputValue)
    }

    return (
        <>
            <h2 data-testid='header'>My Counter</h2>
            <h1
                data-testid='counter'
                className={ `${ counterValue >= 100 ? 'green' : '' }${ counterValue <= -100 ? 'red' : '' }` }>
                { counterValue }
            </h1>

            <button
                data-testid='subtract-btn'
                onClick={ subtractFromCounter }>
                -
            </button>

            <input
                data-testid='input'
                type="number"
                value={ inputValue }
                className='text-center'
                onChange={ (event) => {
                    setInputValue(parseInt(event.target.value))
                } }/>

            <button
                data-testid='add-btn'
                onClick={ addToCounter }>
                +
            </button>
        </>
    )
}
