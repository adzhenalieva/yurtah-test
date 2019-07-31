import React from 'react';
import "./CampCard.css";

const CampCard = (props) => {
    return (
        <div className="CampCard">
            <img className="CampImage" src={props.image} alt="camp"/>
            <p className="CampTitle">{props.address}</p>
            <p className="CampPrice"> $ {props.price}</p>
        </div>
    );
};

export default CampCard;