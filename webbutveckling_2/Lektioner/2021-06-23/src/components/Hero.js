import React from "react";
import heroImage from '../shared/images/hero-image.png'

export default function Hero(props) {
    const style = {
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'min-width': '100%',
        'min-height': '100%',
        'z-index': '-1',
        'color': 'white'
    }

    return (
        <div style={ style }>
            <h1>Hero</h1>
            <img src={ heroImage } alt="background" style={ style }/>
            <hr/>
            { props.children }
        </div>
    )
}
