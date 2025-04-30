import React from 'react';
import './card.css'

const Card = ({text, click}) => {

    const getImage = (category) => {
        let imageSrc;
        try {
        imageSrc = require(`../images/${text}.png`);
        } catch (err) {
        imageSrc = require(`../images/cover.png`);
        }
        return imageSrc
    }

    return (
        <div className="card-tile" onClick={() => click(text)}>
            <img src={getImage(text)} alt="Category" className="card-img"/>
            <h3 className="card-title">{text}</h3>
        </div>     
    )


}
export default Card;