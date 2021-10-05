import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/pages/Intro/Intro";
import LogIn from "./components/pages/LogIn/LogIn";
import SignUp from "./components/pages/SignUp/SignUp";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route path="/" exact component={Intro}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={SignUp}/>
      </BrowserRouter>

    </div>
  );
}

export default App;