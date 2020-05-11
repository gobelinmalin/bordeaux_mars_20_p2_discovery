import React, { Component } from "react";
import "../style/css/AboutUs.css";
import Logo1 from "../style/css/chris.jpg";
import Logo2 from "../style/css/enzo.jpg";
import Logo3 from "../style/css/francois.jpg";
import Logo4 from "../style/css/thomas.jpg";
class AboutUs extends Component {


  render() {
    return (
      <div className="AboutUs">
        <h1 className="AboutUsTitle">About Us</h1>
        <div className="AboutUs-descriptif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        <div className="AboutUs-container">
          <div className="Profil" ><img className="image" src={Logo1} alt="Logo" /><p>Toujours prête pour partir à l’aventure !</p></div>
          <div className="Profil" ><img className="image" src={Logo2} alt="Logo" /><p>En recherche permanente de nouvelles soirées à travers le monde !</p></div>
          <div className="Profil" ><img className="image" src={Logo3} alt="Logo" /><p>Je ne fais que de longs voyages romantiques ! Toujours un peignoir de soie dans la valise.</p></div>
          <div className="Profil" ><img className="image" src={Logo4} alt="Logo" /><p>Voyage pour manger et mange pour voyager.</p></div>
        </div>
      </div>
    );
  }
}

export default AboutUs;