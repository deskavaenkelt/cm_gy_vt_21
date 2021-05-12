import './Navbar.css'
import logo from '../utils/images/Codic-logo.svg'

export default function Navbar() {
    return (
        <nav className='grid-container'>
            <div className='grid-item'>
                <img className='nav-logo' src={logo} alt="Codic logotype"/>
            </div>

            <div className='grid-item'>
                <ul className='links'>
                    <li className='links-item'>
                        <a className='links-item-a' href="#">Startsida</a>
                    </li>
                    <li className='links-item'>
                        <a className='links-item-a' href="#">Våra kurser</a>
                    </li>
                    <li className='links-item'>
                        <a className='links-item-a' href="#">Kontakta oss</a>
                    </li>
                    <li className='links-item'>
                        <a className='links-item-a' href="#">LIA</a>
                    </li>
                    <li className='links-item'>
                        <a className='links-item-a' href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>

            <div className='grid-item'>
                <button className='nav-button-dark'>Login</button>
                <button className='nav-button-light-grey'>Sign up</button>
            </div>
        </nav>
    )
}
