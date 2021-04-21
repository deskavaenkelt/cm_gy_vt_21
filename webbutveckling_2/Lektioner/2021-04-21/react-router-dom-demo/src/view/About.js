import Title from "../components/Title";
import Lorem from "../components/Lorem";
import imageSrc from "../Global/img/about.png";
import ImageSection from "../components/ImageSection";
import data from '../Global/data'

export default function About() {

    const index = 0;
    const sideName = data[index].sideName
    const title1 = data[index].title1
    const text1 = data[index].text1

    let imageTitle = data[index].imageTitle
    let imageAlt = data[index].imageAlt

    const title2 = data[index].title2
    const text2 = data[index].text2

    return (
        <>
            <Title name={ sideName }/>
            <Lorem title={ title1 } text={ text1 }/>
            <ImageSection
                imageTitle={ imageTitle }
                imageSrc={ imageSrc }
                imageAlt={ imageAlt }/>
            <Lorem title={ title2 } text={ text2 }/>
        </>
    )
}
