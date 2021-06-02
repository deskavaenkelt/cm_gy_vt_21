import React from 'react'
import './GridExamples.css'
import { GridContainerOne } from "./grids/GridContainerOne";
import { GridContainerTwo } from "./grids/GridContainerTwo";
import { GridContainerThree } from "./grids/GridContanerThree"

export const GridExamples = () => {
    return (
        <>
            <h1>GridExamples</h1>

            <h2>Med fasta värden</h2>
            <GridContainerOne/>

            <h2>Med måttenheten "fr"</h2>
            <GridContainerTwo/>

            <h2>Bestämd form</h2>
            <GridContainerThree/>
        </>
    )
}
