import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import flecha from "../../assets/flecha.png";

export default function Landingpage() {
  return (
    <>
      <div className="container_landing">
        <div className="flecha">
        <img className="img_fle" src={flecha} alt="flecha" />  
        <div className="bar">
          <NavLink to="/home" className="container_button">
            <span>0</span>
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
}