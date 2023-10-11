// src/Sidebar.js

import React from 'react';
import PropTypes from 'prop-types';
import HelpButton from './components/HelpButton';

const Sidebar = ({ currentStep }) => {
    const sidebarItemStyle = {
        pointerEvents: 'none', // This CSS style will prevent click events and disable the hand cursor.
    };
    return (
        <div className="sidebar-background">
        <div className="logo-container">
            <img
                src="https://assets.website-files.com/64f3b20e044ff5c98b511882/64f6bc6832f87d8b039cf846_hidden-blueprint-logo-wordmark-colored.svg"
                alt="Hidden Blueprint Logo"
                className="hb-logo-img"
            />
        </div>
        <div className="sidebar">
                {[...Array(9).keys()].map(step => (
                    <div
                    key={step}
                    style={sidebarItemStyle} // Apply the pointer-events style here
                    className={`sidebar-item ${currentStep === step + 1 ? 'active' : ''}`}
                    
                    >
                        Step {step + 1}
                    </div>
                ))}
            </div>
            <HelpButton onClick={() => {/* Define your help function for this step */}} />
        </div>

    );
};

Sidebar.propTypes = {
    currentStep: PropTypes.number.isRequired,
    onSidebarClick: PropTypes.func.isRequired,
};

export default Sidebar;
