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
     if(localStorage.getItem("1") === "en famille" && localStorage.getItem("2") === "à la mer" ) {
      history.push(`/destination/0`)
     } else {
      history.push(`/destination/1`)
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

                <button style={{backgroundImage: `url(${response.image})`}} className="Quiz_response" onClick={() => this.handleClick(response, index) } key={index}>{response.text}</button>
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