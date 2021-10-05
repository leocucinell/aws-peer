import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="nav-bar-container">
            <div className="peer-logo___container">
                <Link to="/">Peer</Link>
            </div>
            <div className="selection-elements___container">
                <ul className="items-list___container">
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;