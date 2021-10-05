import React from "react";

import "./LogIn.css"

const LogIn = () => {
    return(
        <div className="log-in___container">
            <form className="log-in___form">
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default LogIn;