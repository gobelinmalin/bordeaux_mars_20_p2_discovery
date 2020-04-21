import React, { Component } from "react";
import { Link } from 'react-router-dom';

const listOfQuiz = [
  {
    title: "J'aimerais voyagé",
    responses: ["En famille", "En couple", "Entre amis", "Seul"]
  },
  {
    title: "J'aimerais voyagé",
    responses: ["A la mer", "A la montagne", "A la campagne", "En ville"]
  },
]

class Quiz extends Component {
  state = {
    quiz0 : "", 
  }
  handleClick = (response) => {
    this.setState({quiz0: response})
  }

  submitForm = () => {
    const { quiz0 } = this.state;
    localStorage.setItem("quiz0", quiz0)
  }

  render() {
    const { match } = this.props;
    return (
      <div className="Quiz">
        {listOfQuiz.filter((quiz, index) => index === Number(match.params.id))
        .map((quiz, index) => 
          <div className="Quiz_content" key={index}>
            <h1>{quiz.title}</h1>
            <div className="Quiz_responses">
              {quiz.responses.map((response, index) => 
                <button onClick={() => this.handleClick(response) } key={index}>{response}</button>
              )}
            </div>
            <Link to="/quiz/1" onClick={() => this.submitForm()}>Validé</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;