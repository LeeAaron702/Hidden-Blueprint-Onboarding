// src/Step7.js
import React, { useState } from 'react';

const Step7 = ({ step7Data, onInputChange }) => {

  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Brand Positioning & Competitive Landscape</h2>
        <label>
          What do you stand for?
          <span className="subtext">What are your values? How do you think your brand is perceived externally? Internally?</span>
          <textarea value={step7Data.values} onChange={(e) => onInputChange('values', e.target.value)} />
        </label>
        <label>
          What is your unique value proposition?
          <span className="subtext">What do you do that no one else does?</span>
          <textarea value={step7Data.uniqueValueProposition} onChange={(e) => onInputChange('uniqueValueProposition', e.target.value)} />
        </label>
        <label>
          What problems do you solve?
          <span className="subtext">How does your brand satisfy needs or improve the quality of life?</span>
          <textarea value={step7Data.problemsSolved} onChange={(e) => onInputChange('problemsSolved', e.target.value)} />
        </label>
        <label>
          How do you communicate your brand’s position?
          <span className="subtext">What is your messaging strategy and how is it executed?</span>
          <textarea value={step7Data.communicationStrategy} onChange={(e) => onInputChange('communicationStrategy', e.target.value)} />
        </label>
        <label>
          Do you have any research that would be valuable in identifying opportunities?
          <span className="subtext">What data and insights from proprietary and/or secondary market research should we know about?</span>
          <textarea value={step7Data.research} onChange={(e) => onInputChange('research', e.target.value)} />
        </label>
        <label>
          Are there any gaps in knowledge that could be gained from additional research?
          <span className="subtext">What don’t we know that we should?</span>
          <textarea value={step7Data.knowledgeGaps} onChange={(e) => onInputChange('knowledgeGaps', e.target.value)} />
        </label>
        <label>
          Who are your top 3 competitors?
          <span className="subtext">Who keeps you on your toes and inspires you to achieve more?</span>
          <textarea value={step7Data.competitors} onChange={(e) => onInputChange('competitors', e.target.value)} />
        </label>
        <label>
          What are their strengths & weaknesses?
          <span className="subtext">What do they do well and where do they come up short?</span>
          <textarea value={step7Data.strengthsWeaknesses} onChange={(e) => onInputChange('strengthsWeaknesses', e.target.value)} />
        </label>
        <label>
          Market share (position) & marketing strategy?
          <span className="subtext">How does everyone (including you) rank in the market? Are there any notable brand strategies that impact their success?</span>
          <textarea value={step7Data.marketShareStrategy} onChange={(e) => onInputChange('marketShareStrategy', e.target.value)} />
        </label>
        <label>
          Advertising spending & messaging?
          <span className="subtext">How much are your competitors spending and where are they spending it? What are they saying?</span>
          <textarea value={step7Data.adSpendingMessaging} onChange={(e) => onInputChange('adSpendingMessaging', e.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default Step7;
