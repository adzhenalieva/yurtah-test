import React, {Component} from 'react';
import "./CampCard.css";

class CampCard extends Component<{image: string, address: string, price: number}> {
    render() {
        const {image, address, price} = this.props;
        return (
                <div className="CampCard">
                    <img className="CampImage" src={image} alt="camp"/>
                    <p className="CampTitle">{address}</p>
                    <p className="CampPrice"> $ {price}</p>
                </div>
        );
    }
}

export default CampCard;