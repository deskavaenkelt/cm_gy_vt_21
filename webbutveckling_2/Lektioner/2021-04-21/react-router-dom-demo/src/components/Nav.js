import { Link } from "react-router-dom";
import '../Global/css/Nav.css'

export default function Nav() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar-list">
                    <Link className="navbar-list-link" to="/">Home</Link>
                </li>
                <li className="navbar-list">
                    <Link className="navbar-list-link" to="/about">About</Link>
                </li>
                <li className="navbar-list">
                    <Link className="navbar-list-link" to="/project">Projekt</Link>
                </li>
                <li className="navbar-list">
                    <Link className="navbar-list-link" to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    )
};
