import React, { useState } from "react";

export default function ConditionalRendering() {
    const [showElement, setShowElement] = useState(false);

    function showIfTrue() {
        return(
            <>
                <h1>True</h1>
            </>
        )
    }

    function showIfFalse() {
        return(
            <>
                <h1>False</h1>
            </>
        )
    }

    function showThis() {
        if (showElement) {
            return showIfTrue();
        } else {
            return showIfFalse();
        }
    }

    return(
        <>
            <h1>Conditional Rendering</h1>

            <button onClick={() => setShowElement(true)}>set True</button>
            <button onClick={() => setShowElement(false)}>set False</button>
            <br/>
            { showThis() }
        </>
    )
}
