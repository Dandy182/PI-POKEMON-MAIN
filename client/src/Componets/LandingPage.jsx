import React from "react";
import pokeball from '../img/Poké_Ball_icon.svg';
//import { Link } from "react-router-dom";
import '../index.css'

export default function Landing(){


  return(<div className="landing__Page">
    <img src={pokeball} className="pokeball" alt="pokeball" />
    <button className="btn btn-start">Start</button>
  </div>)
}