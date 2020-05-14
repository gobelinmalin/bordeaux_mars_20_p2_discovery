import React from 'react';
import { Link } from "react-router-dom";

import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/NavBar.css";


const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/" >
        <img src={logoSvg} className="NavBar_logo"  alt="logo"/>
      </Link>
      
      
      <div className="NavBar_links">
        <Link className="NavBar_link" to="/">Accueil</Link>
        <Link className="NavBar_link" to="/AboutUs">A propos</Link>
        <Link className="NavBar_link" to="/quiz/1">Quiz</Link>
        <Link className="NavBar_link" to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar;