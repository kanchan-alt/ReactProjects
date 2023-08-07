import React from "react";
import './app.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App(){
    return(
        <React.Fragment>
        <Navbar/>
        <h2>This is app function - kanchan</h2>
        <p>This is paragraph</p>
        <Card/>
        </React.Fragment>

    )

};

export default App;