import React from 'react';
import { Link } from "react-router-dom";


import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/NavBar.css";


const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={logoSvg} className="NavBar_logo"  alt="logo"/>
      <div className="NavBar_links">
        <Link className="NavBar_link" to="/">Home</Link>
        <Link className="NavBar_link" to="/contact">Contact</Link>
      </div>
    </nav>
  )

}

export default NavBar;