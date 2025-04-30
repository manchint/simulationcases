import React from 'react';
import './header.css'

const Header = ({activeTab, onchange}) => {

    return (
        <div className="header-container">
            <p>Pulse Scenarios</p>
            <ul className='nav'>
                <li className={activeTab === 'Home' ? 'active' : ''} onClick={() => onchange('Home')}>Home</li>
                <li className={activeTab === 'CaseStudies' ? 'active' : ''} onClick={() => onchange('CaseStudies')}>Case Studies</li>
                <li className={activeTab === 'About' ? 'active' : ''} onClick={() => onchange('About')}>About</li>
            </ul>
        </div>     
    )
}
export default Header;