import './App.css';
import Hero from "./components/Hero";
import Parent from "./components/Parent";
import Data from "./components/Data";
import ConditionalRendering from "./components/ConditionalRendering";
import IfSatser from "./components/IfSatser";

function App() {
    return (
        <Hero>
            {/*<h1 style={ { 'color': 'whitesmoke' } }>App</h1>*/}
            {/*<hr/>*/}
            <Parent/>
            <hr/>
            <Data/>
            <hr/>
            <ConditionalRendering/>
            <hr/>
            <IfSatser/>
        </Hero>
    );
}

export default App;
