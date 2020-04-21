import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../style/css/Home.css";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      picture: null
    }
  }

  getPicture(){
    axios.get("https://pixabay.com/api/")
    //extract DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data =>{
      console.log(data)
      this.setState({
        picture: data.results[0]
      })
    })
  }

  render() {
    return (
      <div>
        <div className="Home_slide_1">
          <h1>Discovery vous aide à trouver le meilleur endroit pour poser vos valises...</h1>
          <h3>Quiz ou hasard, le choix est vôtre !</h3>
        </div>
        <div className="Home_slide_2_and_3">
          <div className="Home_slide_2">
            <h2> Révèle-toi à moi, et tu sauras ou tu vas !</h2>
            <Link to="/quiz/0">C'est parti pour le quiz !</Link>
          </div>
          <div className="Home_slide_3">
            <h2> Pas le temps de réfléchir? Laisse le destin agir !</h2>
            <button className="button_globe"> Lance le globe !</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
