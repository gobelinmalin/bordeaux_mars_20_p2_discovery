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
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/AboutUs">About Us</Link>
        <div className="Home_slide_1">
          <h1>Discovery vous aide à trouver le meilleur endroit pour poser vos valises...</h1>
          <h3>Quiz ou hasard, le choix est vôtre !</h3>
        </div>
        <div className="Home_slide_2_and_3">
          <div className="Home_slide_2">
              <div>
                <h2>Révèle-toi à moi,</h2>
            <p>et tu sauras où tu vas !</p>
              </div>
            <Link to="/quiz/0" className="button_quiz">C'est parti pour le quiz !</Link>
          </div>
          <div className="Home_slide_3">
            <div>
              <h2>Pas le temps de réfléchir ?</h2>
              <p>Laisse le destin agir !</p>
            </div>
            <button className="button_globe">Lance le globe !</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
