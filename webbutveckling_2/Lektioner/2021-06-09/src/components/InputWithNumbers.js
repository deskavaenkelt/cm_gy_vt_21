import React, { useState } from 'react';

export default function InputWithNumbers(){
    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    let sum = parseInt(numberOne) + parseInt(numberTwo);

    return (
        <>
            <div>
                Number 1: <input type="number" onChange={
                event => setNumberOne(event.target.value)
            }/>
            </div>
            <br/>

            <div>
                Number 2: <input type="number" onChange={
                event => setNumberTwo(event.target.value)
            }/>
            </div>
            <br/>

            <div>
                <h2>Innehåll i variablerna</h2>
                numberOne = { numberOne }
                <br/>
                numberTwo = { numberTwo }
            </div>

            <div>
                <h2>Summa:</h2>
                <p>numberOne + numberTwo = { sum }</p>
            </div>
        </>
    )
}
