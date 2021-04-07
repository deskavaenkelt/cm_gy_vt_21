import MyFirstComponent from './MyFirstComponent';
import Grid from "./components/Grid";
import './shared/global/css/Global.css'
import { WelcomeMessage } from "./components/WelcomeMessage";

function App() {
    return (
        <div className="content">
            <Grid/>
            <MyFirstComponent/>
            <WelcomeMessage name="Lars" age="32"/>
        </div>
    );
}

export default App;
