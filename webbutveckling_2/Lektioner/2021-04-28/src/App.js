import './App.css';
// import Card from "./components/Card";
import CardList from "./components/CardList";
import { robots } from "./global/robots";
import SearchBox from "./components/SearchBox";

function App() {
    return (
        // step1()
        // step2(robots)
        step3(robots)
    );
}

export default App;



function step3(robots) {
    return (
        <div className="tc">
            <h1 className="robofriends-logo">Robofriends</h1>
            <SearchBox />
            <CardList robots={ robots }/>
        </div>
    )
}



// function step1() {
//     return (
//         <>
//             <Card id="1" name="John Doe" email="john.doe@gmail.com"/>
//             <Card id="2" name="Jane Doe" email="jane.doe@gmail.com"/>
//             <Card id="3" name="Bengt Doe" email="bengt.doe@gmail.com"/>
//         </>
//     )
// }
//
// function step2(robots) {
//     return (
//         <>
//             <Card id={ robots[0].id } name={ robots[0].name } email={ robots[0].email }/>
//             <Card id={ robots[1].id } name={ robots[1].name } email={ robots[1].email }/>
//             <Card id={ robots[2].id } name={ robots[2].name } email={ robots[2].email }/>
//         </>
//     )
// }
