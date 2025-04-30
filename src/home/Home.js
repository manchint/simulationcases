import React, {useState} from "react";
import './home.css'
import cover from '../images/cover.png'

import CaseStudiesList from "../case-studies-list/CaseStudiesList";
import About from '../about/About'
import Header from '../header/Header';
import Footer from "../footer/Footer";

const Home = () => {
    const [activeTab, setActiveTab] = useState('Home')

    return (
        <>
            <Header activeTab = {activeTab} onchange = {setActiveTab}/>
            {activeTab === 'Home' && 
            <div className="image-container">
                <img src={cover} alt="Background Image" />
                <div className="overlay-text">A collaborative hub for high-impact healthcare simulation—diverse cases, evidence-aligned learning, open to all.</div>
            </div>}
            {activeTab === 'CaseStudies' && <CaseStudiesList />}
            {activeTab === 'About' && <About />}
            <Footer />
        </>
    )
}

export default Home;


