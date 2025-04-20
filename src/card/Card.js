import React from 'react';
import test from './test.png'
import './card.css'

const Card = ({text}) => {

    return (
        <div className="card-tile">
            <img src={test} alt="Hotel Image" className="card-img"/>
            <h3 className="card-title">{text}</h3>
        </div>     
    )


}
export default Card;