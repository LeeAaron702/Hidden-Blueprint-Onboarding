// src/Step8.js
import React from 'react';

const Step8 = ({ step8Data, onInputChange }) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Market & Audience Insights</h2>

        <label>
          What are your current markets and/or service areas?
          <span className="subtext">Where do you do business?</span>
          <textarea
            value={step8Data.currentMarkets}
            onChange={(e) => onInputChange('currentMarkets', e.target.value)}
          />
        </label>

        <label>
          Do you have priority markets?
          <span className="subtext">Do you identify your markets in any order of importance (i.e. primary and secondary geographies)?</span>
          <textarea
            value={step8Data.priorityMarkets}
            onChange={(e) => onInputChange('priorityMarkets', e.target.value)}
          />
        </label>

        <label>
          What is your expansion potential & have you identified specific goals?
          <span className="subtext">Where do you want to grow?</span>
          <textarea
            value={step8Data.expansionPotential}
            onChange={(e) => onInputChange('expansionPotential', e.target.value)}
          />
        </label>

        <label>
          Existing customer profile
          <span className="subtext">What does your current customer look like?</span>
          <textarea
            value={step8Data.existingCustomerProfile}
            onChange={(e) => onInputChange('existingCustomerProfile', e.target.value)}
          />
        </label>

        <label>
          Optimal customer profile?
          <span className="subtext">Do you want your future customer to look different?</span>
          <textarea
            value={step8Data.optimalCustomerProfile}
            onChange={(e) => onInputChange('optimalCustomerProfile', e.target.value)}
          />
        </label>

        <label>
          Cultural trends to consider?
          <span className="subtext">What relevant events or trends are happening right now that may have an impact?</span>
          <textarea
            value={step8Data.culturalTrends}
            onChange={(e) => onInputChange('culturalTrends', e.target.value)}
          />
        </label>

        <label>
          Diversity & inclusion?
          <span className="subtext">Are there any special audiences to consider or represent?</span>
          <textarea
            value={step8Data.diversityInclusion}
            onChange={(e) => onInputChange('diversityInclusion', e.target.value)}
          />
        </label>

        <label>
          What motivates our audience(s)?
          <span className="subtext">What is important to them? What do they respond to?</span>
          <textarea
            value={step8Data.audienceMotivation}
            onChange={(e) => onInputChange('audienceMotivation', e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Step8;
