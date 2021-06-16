import React, { useState } from 'react';

export default function ConditionalRendering() {
    const [displayMe, setDisplayMe] = useState(true);

    if (displayMe) {
        return (
            <>
                <h1>displayMe is true</h1>
                <button onClick={
                    () => setDisplayMe(false)
                }>Toggle displayMe to false</button>
            </>
        );
    } else {
        return (
            <>
                <h1>displayMe is false</h1>
                <button onClick={
                    () => setDisplayMe(!displayMe)
                }>Toggle displayMe to true</button>
            </>
        );
    }
};
