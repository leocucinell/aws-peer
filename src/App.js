import React from "react"
import { BrowserRouter, Route } from "react-router-dom";

import Intro from "./components/pages/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Route path="/" component={Intro}/>
      </BrowserRouter>

    </div>
  );
}

export default App;