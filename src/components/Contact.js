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
    alert('Votre message a bien été envoyé :)  ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    
      
        
        <div className="Contact_container-texte-formulaire">
        <h1>Contact</h1>
          <div className="Contact_contact-descriptif">
              Toujours à la recherche de destinations fun,
              l'équipe Discovery vous invite à partager vos plus belles expériences de voyage.
              Lâchez-vous, le plus beau témoignage gagnera un séjour chez notre partenaire principal "Discovery voyage",
               inclus jacuzzi et bulles de champagne...
    
              </div>
            <div class="Contact_formulaire-contact">
              <form className="Contact_form" onSubmit={this.handleSubmit}>
                <input type="text" name="field1" placeholder="Votre nom" />
                <input type="email" name="field2" placeholder="Votre email" />
                <div className="Contact_content">
                <div className="Contact_message"></div>
                <textarea placeholder="Votre message" onkeyup="adjust_textarea(this)"></textarea>
                </div>
                <input className="button" onChange={this.handleChange} type="submit" value="Envoyer" />
              </form>
            </div>
      </div>

    );
  }
}
export default Contact;

