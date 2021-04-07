import React from 'react';
import '../shared/global/css/Grid.css'
import Dropdown from "./Dropdown";

function Grid() {
    return (
        <div className="grid-container1">
            <div className="grid-item">
                LOGO
            </div>
            <div className="grid-item">
                React
            </div>
            <div className="grid-item">
                <Dropdown/>
            </div>
        </div>
    )
}

export default Grid;
