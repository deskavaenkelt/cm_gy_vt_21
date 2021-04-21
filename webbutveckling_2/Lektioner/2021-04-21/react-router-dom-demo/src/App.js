import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Nav from "./components/Nav";
import SwitchRouters from "./components/SwitchRoutes";

export default function App() {
    return (
        <Router>
            <div>
                <Nav/>
                <SwitchRouters/>
            </div>
        </Router>
    )
}

// function Home() {
//     return (
//         <>
//             <h2>Home</h2>
//         </>
//     )
// }
//
// function About() {
//     return (
//         <>
//             <h2>About</h2>
//         </>
//     )
// }
//
// function Users() {
//     return (
//         <>
//             <h2>Users</h2>
//         </>
//     )
// }
