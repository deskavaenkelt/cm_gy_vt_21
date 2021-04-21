import { Switch, Route } from 'react-router-dom'
import About from "../view/About";
import Project from "../view/Project";
import Home from "../view/Home";

export default function SwitchRouters() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/project">
                <Project />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
};
