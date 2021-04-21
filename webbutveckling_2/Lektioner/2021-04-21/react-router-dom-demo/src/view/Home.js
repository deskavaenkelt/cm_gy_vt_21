import Title from "../components/Title";
import Lorem from "../components/Lorem";
import ImageSection from "../components/ImageSection";
import imageSrc from '../Global/img/dice.png';

export default function Home() {

    const title = "Titel"
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur, cum dolor dolorem eaque eligendi\n" +
        "            ex explicabo iste odio optio quam rem rerum, sequi ut velit. Ipsa minus officiis rem!"

    let imageTitle = "Tärningar"
    let imageAlt = "Bild på två tärningar"

    return (
        <>
            {/*<h2>Home</h2>*/ }
            <Title name="Home"/>
            <Lorem title={ title } text={ text }/>
            <ImageSection
                imageTitle={ imageTitle }
                imageSrc={ imageSrc }
                imageAlt={ imageAlt }/>
            <Lorem title={ title } text={ text }/>
        </>
    )
}
