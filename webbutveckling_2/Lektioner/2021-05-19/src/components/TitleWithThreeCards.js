import React from 'react';
import './TitleWithThreeCards.css'

export default function TitleWithThreeCards(
    { title, img1, img2, img3, alt1, alt2, alt3 }) {

    return (
        <article className='fl w-100 ml4 mr4'>
            <h2>{ title }</h2>
            <div className=''>
                <div className='fl w-100 w-third-l mb4'>
                    <img className='img_width' src={ img1 } alt={ alt1 }/>
                </div>
                <div className='fl w-100 w-third-l mb4'>
                    <img className='img_width' src={ img2 } alt={ alt2 }/>
                </div>
                <div className='fl w-100 w-third-l mb3'>
                    <img className='img_width' src={ img3 } alt={ alt3 }/>
                </div>
            </div>
        </article>
    )
}
;
