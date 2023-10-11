// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function LandingPage() {
  return (
    <div className="onboarding-container">
      <Sidebar currentStep={0} />
      <div className="main-content">
        <div className="form-container">
          <h1>Welcome to Our Onboarding Funnel</h1>
          <p>Here, we'll guide you through several steps to get you set up and ready to go.</p>
          <div className="start-button-container">
    <Link to="/onboarding/step/1" className="start-button">Start Onboarding</Link>
</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
