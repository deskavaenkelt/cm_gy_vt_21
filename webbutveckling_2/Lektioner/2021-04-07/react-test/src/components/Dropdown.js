import React from 'react'
import '../shared/global/css/Dropdown.css'

function Dropdown() {
    function openMenu() {
        document.getElementById("dropdown")
            .classList.toggle("show")
    }

    function closeMenu() {
        document.getElementById("dropdown")
            .classList.remove("show")
    }

    return (
        <div className="dropdown">

            <button onClick={ openMenu }
                    className="dropdown-button">
                Open Menu
            </button>

            <div id="dropdown" className="dropdown-content">
                <h2>Titel</h2>
                <p>Brödtext</p>

                <button onClick={ closeMenu }>
                    Close
                </button>
            </div>

        </div>
    )
}

export default Dropdown

