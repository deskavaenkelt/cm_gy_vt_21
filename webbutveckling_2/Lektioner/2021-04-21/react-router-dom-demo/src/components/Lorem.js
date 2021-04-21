export default function Lorem(props) {
    const { title, text } = props;

    return (
        <section>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </section>
    )
}
