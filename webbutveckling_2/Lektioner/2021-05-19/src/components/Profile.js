import React from 'react'
import './Profile.css'
import TitleWithThreeCards from "./TitleWithThreeCards";
import profile_image from '../utils/images/profile_image.png'
import diablo from '../utils/images/diablo.png'
import gta from '../utils/images/gta.png'
import valheim from '../utils/images/valheim.png'

// img1, img2, img3, alt1, alt2, alt3

const data = {
    profile_image_alt: 'profil bild',
    profile_name: 'Profile Name',
    adress: 'Adress',
    post_adress: 'Post adress',
    ort: 'Ort',
    email: 'Email',
    telephone: 'Tele',
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid architecto asperiores atque deleniti doloribus harum id illum incidunt iste laboriosam natus perferendis porro possimus, quam repellat tenetur voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis cum delectus, deleniti deserunt doloremque, doloribus eaque eligendi iste iure magni odio quaerat quasi quis quisquam sunt ut! A, illo.',
    games_title: 'Favoritspel',
    diablo_alt: 'Diablo img',
    gta_alt: 'GTA img',
    valheim_alt: 'Valheim img',
    friend: 'Vänner'
}

export default function Profile() {
    return (
        <main>
            <section>
                <article className='fl w-100 w-40-ns'>
                    <img src={ profile_image }
                         alt={ data.profile_image_alt }
                         className='ml4 mr4'/>
                </article>
                <article className='fl w-100 w-60-ns'>
                    <div className='ml4 mr4'>
                        <h2>{ data.profile_name }</h2>
                        <p>{ data.adress }</p>
                        <p>{ data.post_adress }, { data.ort }</p>
                        <p>{ data.email }</p>
                        <p>{ data.telephone }</p>
                    </div>
                </article>
            </section>
            <div className='fl w-100'>
                <hr className='mr3 ml3'/>
            </div>
            <section>
                <article className='fl w-100'>
                    <p className='ml4 mr4'>{ data.lorem }</p>
                </article>
                <TitleWithThreeCards
                    title={ data.games_title }
                    img1={ diablo }
                    img2={ gta }
                    img3={ valheim }
                    alt1={ data.diablo_alt }
                    alt2={ data.gta_alt }
                    alt3={ data.valheim_alt }/>
                <TitleWithThreeCards
                    title={ data.friend }
                    img1={ profile_image }
                    img2={ profile_image }
                    img3={ profile_image }
                    alt1={ data.profile_image_alt }
                    alt2={ data.profile_image_alt }
                    alt3={ data.profile_image_alt }/>
            </section>
        </main>
    )
}
