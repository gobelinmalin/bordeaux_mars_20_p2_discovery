import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/css/Home.css";
//const logoSvg from "../style/logo_discovery-01.svg"

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="NavBar">
        <img src= "logoSvg"  alt="logo"/>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        <div className="Home_slide_1">
          <h1>Discovery vous aide à trouver le meilleur endroit pour poser vos valises...</h1>
          <h3>Quiz ou hasard, le choix est vôtre !</h3>
        </div>
        <div className="Home_slide_2_and_3">
          <div className="Home_slide_2"></div>
          <div className="Home_slide_3"></div>
        </div>
      </div>
    );
  }
}

export default Home;
