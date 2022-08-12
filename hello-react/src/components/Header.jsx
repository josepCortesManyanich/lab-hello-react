import React from "react";
import logo1 from "../images/menu-top-xs.png"
import logo2 from "../images/ironhack-logo-xs.png"

export default function Header ()  {
return(
    <header className="Head">
        <div className="Header-images">
            <img className="Logo1" src={logo2} alt= "logo1"/>  
            <img className="Logo2" alt="logo2" src= {logo1} />
        </div>
        <br/>
        <div>
            <h1> SAY HELLO TO </h1>
            <h1> REACT.JS</h1>
            <p>You will learn how to use the most popular frontend library and become a super ninja developer</p>
        </div>
       
        <button className="button-header"> AWESOME!</button>
    </header>
)
}