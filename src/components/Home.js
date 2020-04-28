import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/css/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/AboutUs">About Us</Link>
        <div className="Home_slide_1">
          <h1>Discovery vous aide à trouver le meilleur endroit pour poser vos valises...</h1>
          <h3>Quiz ou hasard, le choix est vôtre !</h3>
        </div>
      </div>
    );
  }
}

export default Home;
