import React, { useState } from "react";
import { connect } from "react-redux";
import { userLoggedIn } from "../../../actions"
import bcrypt from "bcryptjs"
import { Redirect } from "react-router";

import backend from "../../../apis/backend";

import "./LogIn.css"

const LogIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldDirect, setDirect] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        //grab a hold of the user whos email is equal to the email state
        backend.get("user/auth-by-email", {
            params: {
                email: email
            }
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "Application/Json"
            }
        }).then((res) => {
            // res.data -> The user found by email
            //use bcrypt to async compare the password to the hash saved
            bcrypt.compare(password, res.data.password, (err, result) => {
                if(err){
                    //If false, Display a notification to the user about faild attempt
                    console.log("Error comparing passwords: " + err);
                }
                //If true, send action to update current user && redirect to main screen
                if(result){
                    //Password is correct -> Send action creator with current user data Then redirect to main screen
                    props.userLoggedIn(res.data);
                    setDirect(true);
                } else {
                    //Passowrd is incorrect -> Set the error state 
                    console.log("PASSWORD INCORRECT!")
                    setLoginError(true);
                    return;
                }
            });
        }).catch((e) => {
            console.log(e)
            //set the state of the error to display to user
        })
    }

    if(shouldDirect){
        return <Redirect to="/" />
    }
    return(
        <div className="log-in___container">
            {loginError ? <h3>Error logging in...</h3> : null}
            <form onSubmit={handleSubmit} className="log-in___form">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="password" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.currentUser }
}

export default connect(mapStateToProps, {
    userLoggedIn
})(LogIn)