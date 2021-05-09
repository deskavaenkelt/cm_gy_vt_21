import Card from "./Card";

export default function CardList({ robots }) {
    return (
        step3(robots)
        // step2(robots)
        // step1(robots)
    )
};

function step3(robots) {
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={ i }
                            id={ robots[i].id }
                            name={ robots[i].name }
                            email={ robots[i].email }
                        />
                    )
                })
            }
        </>
    )
}

function step2(robots) {
    const cardArray = robots.map((user, i) => {
        return (
            <Card
                key={ i }
                id={ robots[i].id }
                name={ robots[i].name }
                email={ robots[i].email }
            />
        )
    })

    return (
        <>
            { cardArray }
        </>
    )
}

// function step1(robots) {
//     return (
//         <>
//             <Card id={ robots[0].id } name={ robots[0].name } email={ robots[0].email }/>
//             <Card id={ robots[1].id } name={ robots[1].name } email={ robots[1].email }/>
//             <Card id={ robots[2].id } name={ robots[2].name } email={ robots[2].email }/>
//         </>
//     )
// }
