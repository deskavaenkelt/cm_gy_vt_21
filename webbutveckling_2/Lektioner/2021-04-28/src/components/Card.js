export default function Card({ id, name, email }) {
    return (
        step2(id, name, email)
    )
}

function step2(id, name, email) {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={ `https://robohash.org/${ id }?200x200` } alt="robots"/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    )
}

// export default function Card(props) {
//
//     let { id, name, email } = props
//
//     return (
//         // step1()
//         step2(id, name, email)
//     )
// }


// function step1() {
//     return (
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img src="https://robohash.org/test?200x200" alt="robots"/>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }
