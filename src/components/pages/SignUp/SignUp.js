import React from "react";

import "./SignUp.css"

const SignUp = () => {
    return(
        <div className="sign-up___container">
            <form className="sign-up___form">
                <input type="text" name="username" placeholder="user name" />
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SignUp