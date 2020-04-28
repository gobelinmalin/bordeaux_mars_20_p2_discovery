import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../style/css/Destination.css";

const destinationList = [
    {
        name: "La Grèce",
        description_1: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going?",
        description_2: "Her resistance to the mind probe is considerable. It will be some time before we can extract any information from her. The final check-out is complete. All systems are operational. What course shall we set? Perhaps she would respond to an alternative form of persuasion. What do you mean? I think it is time we demonstrate the full power of this station. Set your course for Princess Leia's home planet of Alderaan. With pleasure.",
    },
    {
        name: "Les Alpes",
        description_1: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going?",
        description_2: "Her resistance to the mind probe is considerable. It will be some time before we can extract any information from her. The final check-out is complete. All systems are operational. What course shall we set? Perhaps she would respond to an alternative form of persuasion. What do you mean? I think it is time we demonstrate the full power of this station. Set your course for Princess Leia's home planet of Alderaan. With pleasure.",
    },
    {
        name: "Londres",
        description_1: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going?",
        description_2: "Her resistance to the mind probe is considerable. It will be some time before we can extract any information from her. The final check-out is complete. All systems are operational. What course shall we set? Perhaps she would respond to an alternative form of persuasion. What do you mean? I think it is time we demonstrate the full power of this station. Set your course for Princess Leia's home planet of Alderaan. With pleasure.",
    },
    {
        name: "L'Ardèche",
        description_1: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going?",
        description_2: "Her resistance to the mind probe is considerable. It will be some time before we can extract any information from her. The final check-out is complete. All systems are operational. What course shall we set? Perhaps she would respond to an alternative form of persuasion. What do you mean? I think it is time we demonstrate the full power of this station. Set your course for Princess Leia's home planet of Alderaan. With pleasure.",
    },

]

class Destination extends Component {
    state = {
        destination0 : "",
    }

    render() {
        const { match } = this.props;
        return (
            <div className="Destination">
               {destinationList.filter((destination, index) => index === Number(match.params.id))
                .map((destination, index) => 
                    <div className="Destination_content" key={index}>

                        <div className="destination_head_picture">
                            <h1 className="destination_name">{destination.name}</h1>
                            <h3>{destination.name}</h3>
                        </div>
                        <div className="destination_description_1">
                            <h3>{destination.description_1}</h3>
                        </div>
                        <div className="destination_description_2">
                            <h3>{destination.description_2}</h3>
                        </div>
                        <div className="destination_partenaire">
                            <button>partenaire</button>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default Destination;