import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './header.css'

const Header = ({val}) => {
    const [activeTab, setActiveTab] = useState(val)
    const navigate = useNavigate();

    useEffect(() => {
        if (activeTab === 'Home') {
            navigate('/simulationcases/home')
        }
        if (activeTab === 'CaseScenarios') {
            navigate('/simulationcases/casescenarios')
        }
        if (activeTab === 'About') {
            navigate('/simulationcases/about')
        }
    }, [activeTab])

    return (
        <div className="header-container">
            <p className='header-text'>Pulse Scenarios</p>
            <ul className='nav'>
                <li className={activeTab === 'Home' ? 'active' : ''} onClick={() => setActiveTab('Home')}>Home</li>
                <li className={activeTab === 'CaseScenarios' ? 'active' : ''} onClick={() => setActiveTab('CaseScenarios')}>Case Scenarios</li>
                <li className={activeTab === 'About' ? 'active' : ''} onClick={() => setActiveTab('About')}>About</li>
            </ul>
        </div>     
    )
}
export default Header;