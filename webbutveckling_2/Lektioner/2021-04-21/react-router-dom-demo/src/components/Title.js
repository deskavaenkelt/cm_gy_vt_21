export default function Title(props) {
    const name = props.name

    return (
        <section>
            <h1>
                {/*{ props.title }*/ }
                { name }
            </h1>
        </section>
    )
};
