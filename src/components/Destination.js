import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../style/css/Destination.css";

const destinationList = [
    {
    idlocation: 1,
    name: "Londres",
    description: "Du style audacieux de Shoreditch à la punk attitude de Camden en passant par l'élégance de Portobello Road, Londres rassemble de nombreux univers. Dans cette ville énergique, les jours se suivent sans se ressembler. Explorez les sites historiques ou royaux et des monuments qui vous font rêver, testez des restaurants étoilés, buvez une pinte dans un pub traditionnel ou perdez-vous dans le méandre des rues pavées pour vous laisser surprendre. À Londres, les possibilités sont infinies.",
    image1: "https://cdn.pixabay.com/photo/2014/11/13/23/34/london-530055_960_720.jpg",
    image2: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_960_720.jpg",
    image3: "https://cdn.pixabay.com/photo/2015/04/20/13/19/city-731219_960_720.jpg",
    image4: "https://cdn.pixabay.com/photo/2018/11/27/09/00/london-3841024_960_720.jpg",
    language: "Anglais",
    url: "https://www.tripadvisor.fr/Tourism-g186338-London_England-Vacations.html"
    },
    {
    idlocation: 2,
    name: "Les Alpes",
    description: "Les Alpes du Sud, chaîne de montagnes baignées de soleil, regorgent de points de vue époustouflants. Ce massif tourné vers la Méditerranée surprend constamment par la diversité de ses paysages. Ses lacs aux eaux turquoise et ses vallées forestières, ses sommets enneigés en hiver et arides en été, offrent des panoramas exceptionnels, directement accessibles depuis ses cinq stations principales : Auron, Isola 2000, Pra Loup, Val d’Allos et Valberg.",
    image1: "https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg",
    image2: "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
    image3: "https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448_960_720.jpg",
    image4: "https://cdn.pixabay.com/photo/2014/02/07/10/19/winter-260817_960_720.jpg",
    language: "Française",
    url: "https://www.tripadvisor.fr/Tourism-g1135858-Alpes_de_Haute_Provence_Provence_Alpes_Cote_d_Azur-Vacations.html"
    },
    {
    idlocation: 3,
    name: "La Grèce",
    description: "On la croit européenne, elle raisonne en orientale ; on y vient pour ses îles, mais c'est aussi l'un des pays les plus montagneux d'Europe ; la démocratie y est née, mais l'anarchie a su s'y faire une place. Aucun doute : la Grèce est la terre de tous les paradoxes. A vous de l'apprécier dans toute sa dimension. Lieu de naissance de la tragédie et de la démocratie, la Grèce peut se prévaloir d'un héritage incomparable. Des brumes d'Athènes au soleil éclatant des îles, vous pourrez contempler le centre du monde à Delphes, les innombrables colonnes de l'île sacrée de Délos, les fresques des palais minoens en Crète, et les traces de la légendaire Atlantide à Santorin.",
    image1: "https://cdn.pixabay.com/photo/2014/08/15/11/29/sea-418742_960_720.jpg",
    image2: "https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386_960_720.jpg",
    image3: "https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_960_720.jpg",
    image4: "https://cdn.pixabay.com/photo/2017/12/01/14/54/turquoise-2991021_960_720.jpg",
    language: "Grec",
    url: "https://www.tripadvisor.fr/Tourism-g189398-Greece-Vacations.html"
    },
    {
    idlocation: 4,
    name: "L'Ardèche",
    description: "Le département de l'Ardèche est un département français situé dans la région Auvergne-Rhône-Alpes. Sa préfecture est Privas. Il doit son nom à la rivière Ardèche qui le traverse d'ouest en est, ses habitants s'appellent les Ardéchois. Il est composé de 335 communes au 1ᵉʳ janvier 2020.",
    image1: "https://cdn.pixabay.com/photo/2015/03/26/09/57/ardeche-690656_960_720.jpg",
    image2: "https://cdn.pixabay.com/photo/2015/10/27/09/28/cave-1008645_960_720.jpg",
    image3: "https://cdn.pixabay.com/photo/2019/05/08/10/13/ardeche-4188263_960_720.jpg",
    image4: "https://cdn.pixabay.com/photo/2018/02/17/21/18/architecture-3160936_960_720.jpg",
    language: "Française",
    url: "https://www.tripadvisor.fr/Tourism-g551474-Ardeche_Auvergne_Rhone_Alpes-Vacations.html"
    }
]

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
        return (
            <div className="Destination">
               {destinationList.filter((destination, index) => index === Number(match.params.id))
                .map((destination, index) => 
                    <div className="Destination_content" key={index}>
                        <div style={{backgroundImage: `url(${destination.image1})`}} className="destination_head_picture">
                            <h1 className="destination_name">{destination.name}</h1>
                            <h3 className="sub_title" >est votre destination surprise</h3>
                        </div>
                        <div className="destination_description">
                            <p className="description_text">{destination.description}</p>
                        </div>
                        <div style={{backgroundImage: `url(${destination.image4})`}} className="destination_partenaire">
                            <p className="partenaire_text">Retrouvez nos lien partenaires <br /> si vous souhaitez planifier votre voyage</p>
                            <a href={destination.url} target="_blank" rel="noopener noreferrer" className="partenaire_button">Envolez-vous!</a>
                            <Link to="/quiz/1" className="return_to_quiz">je retente ma chance</Link>
                        </div>
                    </div>
                )}

            </div>
        );
    }
}

export default Destination;