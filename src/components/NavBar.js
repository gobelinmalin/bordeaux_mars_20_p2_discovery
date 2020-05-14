import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/NavBar.css";


class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
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
  
        <div className="Menu_burger" >
            <Menu right>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
            </Menu>
        </div>
      </nav>
    )
  }
}

export default NavBar;