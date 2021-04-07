import React from 'react';

export const WelcomeMessage = (props) => {

    const { name, age } = props;

    // const name = props.name;
    // const age = props.age;

    return (
        <div>
            {/*<h2>Välkommen {props.name}!</h2>*/ }
            <h2>Välkommen { name }!</h2>
            <p>Ålder { age } år</p>
        </div>
    )
}


// function WelcomeMessage() {
//     return (
//         <h2>Välkommen! </h2>
//     )
// }
//
// export default WelcomeMessage
