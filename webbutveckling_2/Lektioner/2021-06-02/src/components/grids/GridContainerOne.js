import React from 'react'
import '../GridExamples.css'

export const GridContainerOne = () => {
    return (
        <div className='grid-container1'>
            <div className='grid-container1-item'>
                1 = 100px
            </div>
            <div className='grid-container1-item'>
                2 = auto (det som blir över)
            </div>
            <div className='grid-container1-item'>
                3 = 200px
            </div>
        </div>
    )
}
