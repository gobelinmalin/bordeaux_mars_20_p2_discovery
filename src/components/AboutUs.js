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
        <h1 className="AboutUsTitle">A propos</h1>
          <div className="AboutUs-descriptif">
            <h4>
              Nous sommes une équipe de quatre joyeux développeurs JS React de la région bordelaise passionnés de voyage et d'aventures.
              Notre mission : vous aider à trouver la destination idéale en fonction de vos envies et vos contraintes !
            </h4>
          </div>
        <div className="AboutUs-container">
          <div className="Profil" >
            <img className="image" src={Logo1} alt="Logo" />
            <div className="background-text" >
              <h3>Christelle</h3>
              <p>Toujours prête pour partir à l’aventure !</p>
            </div>
          </div>
          <div className="Profil" >
            <div className="background-text">
              <h3>Enzo</h3>
              <p>En recherche permanente de nouvelles soirées à travers le monde !</p>
            </div>
            <img className="image" src={Logo2} alt="Logo" />  
          </div>
          <div className="Profil" >
            <img className="image" src={Logo4} alt="Logo" />
            <div className="background-text" >
              <h3>Thomas</h3>
              <p>Voyage pour manger et mange pour voyager.</p>
            </div>
            
          </div>
          <div className="Profil" >
            <div className="background-text" >
              <h3>François</h3>
              <p>Je ne fais que de longs voyages romantiques ! Toujours un peignoir de soie dans la valise.</p>
            </div>
            <img className="image" src={Logo3} alt="Logo" />
            
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default AboutUs;