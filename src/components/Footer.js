import React from 'react';
import { Link } from "react-router-dom";

import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/Footer.css";


const Footer = () => {
  return (
    <footer className="Footer">
        <div className="Footer">
        <Link className="Footer" to="/contact">
            <p>Made with 
            <span role="img" aria-label="arraw-heart">&#x1F498;</span>
          by the 
        <img src={logoSvg} className="NavBar_logo"  alt="logo"/>
         Team
        </p>
        </Link>
            
        </div>
    </footer>
  )

}

export default Footer;