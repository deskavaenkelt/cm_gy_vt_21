import React, { useEffect, useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    useEffect(() => {

    }, []);

    return (
        <>
            <h1>Parent</h1>

            <h2>Count in Parent component = { count }</h2>
            (Kommer uppdateras från child component)

            <Child onClick={ [increment, reset, decrement] }
                   count={ count }/>
        </>
    )
}
