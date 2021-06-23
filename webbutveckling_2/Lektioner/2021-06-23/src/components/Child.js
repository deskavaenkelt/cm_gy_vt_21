import React from "react";

export default function Child({ onClick, count }) {
    return (
        <>
            <h1>Child</h1>

            <button onClick={ onClick[2] }>
                Decrement
            </button>

            <button onClick={ onClick[1] }>
                Reset
            </button>

            <button onClick={ onClick[0] }>
                Increment
            </button>

            <h2>Count value from parent = { count }</h2>
        </>
    )
}
