import './App.css';
import CenterSide from "./components/CenterSide";
import { GridExamples } from "./components/GridExamples";
import { DifferentComponents } from "./components/DifferentComponents";
import { UserProvider } from "./shared/global/provider/UserProvider";
import { ChangeSharedVariables } from "./components/ChangeSharedVariables";
import { LocalStorageExample } from "./components/LocalStorageExample";

function App() {
    return (
        <UserProvider>
            <CenterSide/>
            <GridExamples/>
            <DifferentComponents/>
            <ChangeSharedVariables/>
            <LocalStorageExample/>
        </UserProvider>
    );
}

export default App;
