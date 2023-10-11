// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingParent from './OnboardingParent';
import LandingPage from './LandingPage';  // Import the LandingPage component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Add this line */}

          <Route path="onboarding/step/:stepNumber" element={<OnboardingParent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
