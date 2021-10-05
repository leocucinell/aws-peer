import React from "react";

import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="nav-bar-container">
            <div className="peer-logo___container">
                Peer
            </div>
            <div className="selection-elements-container">
                <ul>
                    <li>Log In</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;