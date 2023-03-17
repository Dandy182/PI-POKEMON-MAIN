import React from "react";
import logo from "../img/pngegg.png"
import { NavLink } from "react-router-dom";

export default function Landing(){


  return(<div className="landing">
  <div className="landing__center">
    <img src={logo} alt="logo" />
    <NavLink to="/home">
    <div className="btn btn__landing">Ingresar</div>
    </NavLink>
  </div>
  </div>)
}