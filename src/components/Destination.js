import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../style/css/Destination.css";

class Destination extends Component {
    state = {
        destination0 : "",
        listOfDestinations: []
    }

    componentDidMount() {
        axios.get('https://api-discoverie.herokuapp.com/api/locations')
        .then(destination => destination.data)
        .then(data => this.setState({listOfDestinations: data}))
    }

    render() {
        const { match } = this.props;
        const { listOfDestinations } = this.state;
        return (
            <div className="Destination">
               {listOfDestinations.filter((destination, index) => index === Number(match.params.id))
                .map((destination, index) => 
                    <div className="Destination_content" key={index}>
                        <div style={{backgroundImage: `url(${destination.image1})`}} className="destination_head_picture">
                            <h3 className="sub_title" >Votre destination surprise est</h3>
                            <h1 className="destination_name">{destination.name}</h1>
                        </div>
                        <div className="destination_description">
                            <p className="description_text">{destination.description}</p>
                            <div style={{backgroundImage: `url(${destination.image1})`}} className="description_background"></div>
                        </div>
                        <div className="images_container">
                            <div className="image_destination" style={{backgroundImage: `url(${destination.image2})`}}></div>
                            <div className="image_destination" style={{backgroundImage: `url(${destination.image3})`}}></div>
                        </div>
                        <div className="destination_partenaire">
                            <div className="partenaire_content">
                                <p className="partenaire_text">Retrouvez nos liens partenaires <br /> si vous souhaitez planifier votre voyage</p>
                                <a href={destination.url} target="_blank" rel="noopener noreferrer" >
                                    <button className="partenaire_button">Envolez-vous!</button>
                                </a>
                                <Link to="/quiz/1" className="return_to_quiz">je retente ma chance</Link>
                            </div>
                            <div style={{backgroundImage: `url(${destination.image4})`}} className="background_partenaire"></div>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default Destination;