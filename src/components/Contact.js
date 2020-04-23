import React, { Component } from "react";
import "../style/css/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Ok  ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="container-texte-formulaire">
       <div className="contact-descriptif">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <div class="formulaire-contact">
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="field1" placeholder="Votre nom" />
        <input type="email" name="field2" placeholder="Votre email" />
        <div className="message">Votre message</div>
        <textarea placeholder="" onkeyup="adjust_textarea(this)"></textarea>
        <input value={this.state.value} onChange={this.handleChange} type="submit" value="Envoyer" />
  </form>
</div>
      </div>
      </div>
    );
  }
}

export default Contact;

