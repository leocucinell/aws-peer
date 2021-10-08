import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {userLoggedIn} from "../../actions"

import "./NavBar.css";

const NavBar = (props) => {
    

    const handleLogOut = (e) => {
        props.userLoggedIn(null);
    }

    if(props.user){
        return(
            <nav className="nav-bar-container">
                <div className="peer-logo___container">
                    <Link to="/">Peer</Link>
                </div>
                <div className="selection-elements___container">
                    <ul className="items-list___container">
                        <li><Link to="/">Account</Link></li>
                        <li onClick={handleLogOut}>Log out</li>
                    </ul>
                </div>
            </nav>
        )
    }
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

const mapStateToProps = (state) => {
    return {user: state.currentUser}
}

export default connect(mapStateToProps, {
    userLoggedIn
})(NavBar);