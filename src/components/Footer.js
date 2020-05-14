import React from 'react';
import { Link } from "react-router-dom";

import logoSvg from "../style/logo_discovery-01.svg";

import "../style/css/Footer.css";


const Footer = () => {
  return (
    <footer className="Footer">
        
          <p>Made with 
            <span role="img" aria-label="arraw-heart">&#x1F498;</span>
          by the 
              <Link to="/" >
                <img src={logoSvg} className="NavBar_logo"  alt="logo"/>
              </Link>
         Team
          </p>
        
    </footer>
  )

}

export default Footer;