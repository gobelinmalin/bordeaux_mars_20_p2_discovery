import React from 'react';
import { Link } from "react-router-dom";

import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/NavBar.css";


const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={logoSvg} className="NavBar_logo"  alt="logo"/>
      
      <div className="NavBar_links">
        <Link className="NavBar_link" to="/">Accueil</Link>
        <Link className="NavBar_link" to="/contact">Contact</Link>
      </div>

      <div className="NavBar_burger_content">
        <button className="Open_burger_button">
          <i class="fas fa-bars"></i>
        </button>  
            <div className="NavBar_burger_list">
              <button className="Close_burger_button">
                <i class="fas fa-times"></i>
              </button>
              <div className="Open_menu" >
                  <Link className="NavBar_burger_link" to="/">Accueil</Link>
                  <Link className="NavBar_burger_link" to="/quiz/:id">Quiz</Link>
                  <Link className="NavBar_burger_link" to="/destination/:id">Destinations</Link>
                  <Link className="NavBar_burger_link" to="/contact">Contact</Link>
                  <Link className="NavBar_burger_icon" to="/"><i class="fab fa-tripadvisor"></i></Link>
              </div>
              
            </div>
      </div>

    </nav>
  )

}

export default NavBar;