import React, {useState} from "react";
import { Redirect } from "react-router";

import backend from "../../../apis/backend";

import "./SignUp.css"

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectHome, setRedirectHome] = useState(false);
    const [subError, setSubError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //Here I am going to create a user within my dynamodb database
        backend.post('user/create', {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            friends: []
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(() => {
            setRedirectHome(true);
        }).catch((error) => {
            console.log(error);
            setSubError(true);
        });
        
    }

    const renderError = () => {
        return(
            <div className="submission-error___container">
                <h1>Error submitting</h1>
            </div>
        );
    }

    
    if(redirectHome){
        return(
            <Redirect to="/"/>
        );
    }
    return(
        <div className="sign-up___container">
            {subError ? renderError() : null}
            <form onSubmit={handleSubmit} className="sign-up___form">
                <input onChange={(e) => {setFirstname(e.target.value)}} value={firstname} type="text" name="firstname" placeholder="first name" />
                <input onChange={(e) => {setLastname(e.target.value)}} value={lastname} type="text" name="lastname" placeholder="last name" />
                <input onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" name="username" placeholder="user name" />
                <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" name="email" placeholder="email" />
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" name="password" placeholder="password" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SignUp