import { Switch, Route } from 'react-router-dom'
import About from "../view/About";
import Project from "../view/Project";
import Home from "../view/Home";
import Users from "../view/Users";

export default function SwitchRouters() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/project">
                <Project />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
};
