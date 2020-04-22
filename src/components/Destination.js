import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../style/css/Destination.css";

class Destination extends Component {
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
            <div className="destination_head_picture">
                <h1 className="destination_name">La Grèce</h1>
                <h3>La Grèce</h3>
            </div>
            <div className="destination_description_1">
                <h3>description 1</h3>
            </div>
            <div className="destination_description_2">
                <h3>description 2</h3>
            </div>
            <div className="destination_partenaire">
                <h3>partenaire</h3>
            </div>
        </div>
        );
    }
}

export default Destination;