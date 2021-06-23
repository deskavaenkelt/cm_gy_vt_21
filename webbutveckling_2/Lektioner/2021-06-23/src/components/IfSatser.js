import React, { useState } from "react";
import LoadingFunction from "./LoadingFunction";

export default function IfSatser() {
    const [value, setValue] = useState(-1)

    function zeroFunction() {
        return (
            <h1>0</h1>
        )
    }

    function firstFunction() {
        return (
            <h1>1</h1>
        )
    }

    function secondFunction() {
        return (
            <h1>2</h1>
        )
    }

    function thirdFunction() {
        return (
            <h1>3</h1>
        )
    }

    function showThis() {
        if (value === 0) {
            return zeroFunction();
        } else if (value === 1) {
            return firstFunction();
        } else if (value === 2) {
            return secondFunction();
        } else if (value === 3) {
            return thirdFunction();
        } else {
            return LoadingFunction();
        }
    }

    return (
        <>
            <h1>IfSatser</h1>
            { showThis() }
            <button onClick={ () => setValue(0) }>0</button>
            <button onClick={ () => setValue(1) }>1</button>
            <button onClick={ () => setValue(2) }>2</button>
            <button onClick={ () => setValue(3) }>3</button>
            <button onClick={ () => setValue(-1) }>reset</button>
        </>
    )
};
