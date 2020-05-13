import React, { Component } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';

import "../style/css/Quiz.css";

class Quiz extends Component {
  state = {
    quiz : {}, 
    listOfQuiz: [],
    listOfResponse: []
  }

  componentDidMount() {
    const { match } = this.props;
    axios.get('https://api-discoverie.herokuapp.com/api/questions')
      .then(response => response.data)
      .then(data => this.setState({listOfQuiz: data}))
    axios.get(`https://api-discoverie.herokuapp.com/api/questions/${match.params.id}/responses`)
    .then(response => response.data)
    .then(data => this.setState({listOfResponse: data}))
  }



  handleClick = (response, index) => {
    this.setState({quiz: response.text})
  }

  submitForm = () => {
    const { quiz } = this.state;
    const { match, history } = this.props;
    const nextPage = Number(match.params.id) + 1;
  
    localStorage.setItem(`${match.params.id}`, quiz)

   if(nextPage === 6) {
     if(localStorage.getItem("2") === "en ville" ) {
      if(localStorage.getItem("3") !== "à pied, à vélo" ) {
        if(localStorage.getItem('4') === "luxe"  ||  localStorage.getItem('4') === "no limit") {
          if(localStorage.getItem("5") === "en Europe" || localStorage.getItem("5") === "partout") {
            history.push(`/destination/0`) // Londres
          }
        }
      }
     } 
     else if(localStorage.getItem("2") === "à la montagne" ) {
      if(localStorage.getItem("3") !== "à pied, à vélo" ) {
        if(localStorage.getItem('4') === "moyen"  ||  localStorage.getItem('4') === "luxe") {
          history.push(`/destination/1`) // Alpes
        }
      }
     }
     else if(localStorage.getItem("2") === "à la mer" ) {
      if(localStorage.getItem("3") === "en avion" ) {
        if(localStorage.getItem("5") !== "en France" || localStorage.getItem("5") !== "dans l'espace") {
          history.push(`/destination/2`) // Grèce
        }
      }
     }
     else if(localStorage.getItem("2") === "à la campagne" ) {
      if(localStorage.getItem('4') === "limité"  ||  localStorage.getItem('4') === "moyen") { 
        if(localStorage.getItem("5") === "en France" ) {
          history.push(`/destination/3`) // Ardèche
        }
      }
     }
   } else {
    history.push(`/quiz/${nextPage}`)
   }



    axios.get('https://api-discoverie.herokuapp.com/api/questions')
      .then(response => response.data)
      .then(data => this.setState({listOfQuiz: data}))
    axios.get(`https://api-discoverie.herokuapp.com/api/questions/${nextPage}/responses`)
    .then(response => response.data)
    .then(data => this.setState({listOfResponse: data}))
  }

  render() {
    const { match } = this.props;
    const { listOfQuiz, listOfResponse } = this.state;

    return (
      <div className="Quiz">
        {listOfQuiz.filter((quiz, index) => quiz.idquestion === Number(match.params.id))
        .map((quiz, index) => 
          <div className="Quiz_content" key={index}>
              <h1 className="Quiz_h1">{quiz.text}</h1>
              <div className="Quiz_responses">
                {listOfResponse.map((response, index) => 
                  <button 
                    style={{backgroundImage: `url(${response.image})`}} 
                    className="Quiz_response" 
                    onClick={() => this.handleClick(response, index) } 
                    key={index}>
                      <p className="Quiz_text_responses">{response.text}</p>
                  </button>
                )}
            </div>
              <Link className="Quiz_button" onClick={() => this.submitForm()}>Valider</Link> 
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;