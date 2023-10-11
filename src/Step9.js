// src/Step9.js
import React from 'react';

const Step9 = ({ step9Data, onInputChange }) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Sales & Promotion Insights</h2>

        <label>
          What is your unique selling proposition?
          <span className="subtext">Why would someone buy from you versus buying from anyone else or versus doing nothing at all?</span>
          <textarea
            value={step9Data.uniqueSellingProposition}
            onChange={(e) => onInputChange('uniqueSellingProposition', e.target.value)}
          />
        </label>

        <label>
          What problem does your product/service solve?
          <textarea
            value={step9Data.problemSolved}
            onChange={(e) => onInputChange('problemSolved', e.target.value)}
          />
        </label>

        <label>
          What is the most common result your customer gets from using your product/service?
          <textarea
            value={step9Data.commonResult}
            onChange={(e) => onInputChange('commonResult', e.target.value)}
          />
        </label>

        <label>
          How are you currently promoting your product/service?
          <span className="subtext">Are there any special promotions or offers you’re currently running? What tools, channels, and messaging strategies are you currently using to sell your product?</span>
          <textarea
            value={step9Data.currentPromotions}
            onChange={(e) => onInputChange('currentPromotions', e.target.value)}
          />
        </label>

        <label>
          What is your best-selling product/service? Why?
          <textarea
            value={step9Data.bestSellingProduct}
            onChange={(e) => onInputChange('bestSellingProduct', e.target.value)}
          />
        </label>

        <label>
          Why do you think this product is selling the best, and are there any potential cross-selling or upselling opportunities to add to the sales funnel?
          <textarea
            value={step9Data.crossSellingOpportunities}
            onChange={(e) => onInputChange('crossSellingOpportunities', e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Step9;
