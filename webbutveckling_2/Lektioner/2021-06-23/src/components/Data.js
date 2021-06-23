import React, { useState } from "react";

export default function Data() {
    const data = [
        {
            Name: 'Adam',
            Age: 21
        },
        {
            Name: 'Bengt',
            Age: 22
        },
        {
            Name: 'Cesar',
            Age: 23
        },
    ];

    const initialName = 'None selected';
    const initialAge = 0;
    const [name, setName] = useState(initialName);
    const [age, setAge] = useState(initialAge);

    function setUser(index) {
        setName(data[index].Name)
        setAge(data[index].Age)
    }

    function reset() {
        setName(initialName)
        setAge(initialAge)
    }

    return (
        <>
            <h1>Data</h1>

            <p>Name: { name }</p>
            <p>Age: { age }</p>

            <button onClick={ () => setUser(0) }>data[0]</button>
            <button onClick={ () => setUser(1) }>data[1]</button>
            <button onClick={ () => setUser(2) }>data[2]</button>
            <button onClick={ () => reset() }>reset</button>
        </>
    )
};
