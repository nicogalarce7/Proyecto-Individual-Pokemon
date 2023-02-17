import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import flecha from "../../assets/flecha.png";
import Press from "../../assets/press.png"
import title from "../../assets/Pokemon_logo.png"
import ProyectoNico from "../../assets/poyectoNico.png"
export default function Landingpage() {
  return (
    <>
      <div className="container_landing">
        <img className= "ttile_L"src={title} alt="title" />
         <img className="preess" src={Press} alt="press"/>
        <img className="img_fle" src={flecha} alt="flecha" /> 
        <div className="bar">
          <NavLink to="/home" className="container_button">
            <span>0</span>
          </NavLink>
        </div> 
        <img className="title_name" src={ProyectoNico} alt="name" />
      </div>
    </>
  );
}
