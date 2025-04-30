import React from 'react';
import test from './test.png'
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
            <img src={getImage(text)} alt="Category Image" className="card-img"/>
            <h3 className="card-title">{text}</h3>
        </div>     
    )


}
export default Card;