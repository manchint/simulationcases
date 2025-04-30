import React from 'react';
import './about.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MissionComp = () => {

    return (
        <>
            <Header val="About"/>
            <div className="about-container">
                <div className='about-content'>
                    <h2 className='text-center'>OUR GOAL</h2>
                    <p>In today’s evolving healthcare education landscape, simulation has emerged as a vital cornerstone of professional training. 
                        From guiding medical students through their first code blue to helping experienced nurses refine critical decision-making skills, simulation offers a safe, immersive environment where learners can engage deeply—without the risk of real-world consequences. 
                        It bridges theory and practice, fostering confidence, competence, and collaboration in a way that traditional instruction alone cannot.</p>
                    <p>At Pulse Scenarios, we are driven by a commitment to the power of shared knowledge. 
                        Our mission is both simple and transformative: to curate a high-quality, diverse library of multidisciplinary simulation cases spanning the full spectrum of healthcare—from emergency medicine to rehabilitation and beyond. 
                        Each scenario is thoughtfully aligned with clear, evidence-informed learning objectives, ensuring a targeted, outcomes-driven approach to education.</p>
                    <p>We aim to connect a global network of educators through open access and collaborative learning. 
                        Whether you're launching a new curriculum, refreshing an established program, or simply seeking fresh inspiration, 
                        Pulse Scenarios is your dynamic digital partner in simulation-based education. 
                        Think of it as a living resource—constantly evolving to meet the needs of today’s learners and tomorrow’s challenges.</p>
                    <p>We invite you to explore, adapt, and integrate these cases into your own teaching environments. Just as simulation itself is never static, neither are we. At Pulse Scenarios, we believe in continuous growth, innovation, and the collective advancement of healthcare education.</p>
                    <br></br>
                    <h2 className='text-center'>CONTACT INFO</h2>
                    <p className='text-center'>Let’s raise the bar—together. We welcome your insights, questions, and feedback. Join the conversation and help us shape the future of healthcare training.</p>
                    <a className="text-center" href="mailto:srira.mendu@gmail.com">srira.mendu@gmail.com</a>
                </div>
            </div> 
            <Footer />
        </>    
    )
}
export default MissionComp;