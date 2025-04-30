import React from "react";
import './home.css'
import cover from '../images/cover.png'

import Header from '../header/Header';
import Footer from "../footer/Footer";

const Home = () => {

    return (
        <>
            <Header val='Home'/>
            <div className="image-container">
                <img src={cover} alt="Background Image" />
                <div className="overlay-text">A collaborative hub for high-impact healthcare simulation—diverse cases, evidence-aligned learning, open to all.</div>
            </div>
            <Footer />
        </>
    )
}

export default Home;


