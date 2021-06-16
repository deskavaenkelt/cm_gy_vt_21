import './App.css';
import './shared/global.css';
import InputWithNumbers from "./components/InputWithNumbers";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {

    return (
        <div>
            <h1>App</h1>
            <br/>

            <InputWithNumbers/>
            <hr/>
            <ConditionalRendering/>

        </div>
    );
}

export default App;
