import Title from "./Title";
import Lorem from "../components/Lorem";
import ImageSection from "../components/ImageSection";
import data from "../Global/data";

export default function Slim(props) {

    const { index, imageSrc } = props;

    return (
        <>
            <Title name={ data[index].sideName }/>
            <Lorem title={ data[index].title1 }
                   text={ data[index].text1 }/>
            <ImageSection
                imageTitle={ data[index].imageTitle }
                imageSrc={ imageSrc }
                imageAlt={ data[index].imageAlt }/>
            <Lorem title={ data[index].title2 }
                   text={ data[index].text2 }/>
        </>
    )
}
