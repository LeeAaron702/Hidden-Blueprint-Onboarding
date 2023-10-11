import React from 'react';

const Step6 = ({
  step6Data,
  onInputChange
}) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Business Background & Objectives</h2>
        <label>
          Background
          <span className="subtext">Describe your business. What do you do? Why do you do it? What do you believe?</span>
          <textarea
            value={step6Data.background}
            onChange={(e) => onInputChange('background', e.target.value)}
          />
        </label>
        <label>
          Business Challenges
          <span className="subtext">What are your primary barriers (internal and/or external) to success or growth?</span>
          <textarea
            value={step6Data.challenges}
            onChange={(e) => onInputChange('challenges', e.target.value)}
          />
        </label>
        <label>
          Industry Facts & Trends
          <span className="subtext">What are the most relevant and current trends that are impacting your business? Are there any seasonality considerations (cyclical purchase behaviors, etc.)?</span>
          <textarea
            value={step6Data.industryFacts}
            onChange={(e) => onInputChange('industryFacts', e.target.value)}
          />
        </label>
        <label>
          What are your brand’s primary strengths & weaknesses?
          <span className="subtext">Identify your key strengths, weaknesses, opportunities, and threats as you see them today.</span>
          <textarea
            value={step6Data.strengthsWeaknesses}
            onChange={(e) => onInputChange('strengthsWeaknesses', e.target.value)}
          />
        </label>
        <label>
          What do you aspire to achieve long term?
          <span className="subtext">Tell us about some of your goals? An example would be to achieve a 30% market share within 18 months.</span>
          <textarea
            value={step6Data.longTermGoals}
            onChange={(e) => onInputChange('longTermGoals', e.target.value)}
          />
        </label>
        <label>
          What is the quantifiable measure of success you need to accomplish your goals?
          <span className="subtext">These are your objectives. An example would be to sell $1,350,000 worth of ticket sales in the next 4 months.</span>
          <textarea
            value={step6Data.measureOfSuccess}
            onChange={(e) => onInputChange('measureOfSuccess', e.target.value)}
          />
        </label>
        <label>
          What budget allowances exist to achieve your objectives?
          <span className="subtext">We’ll need to know what funds are available with which to work to assure successful outcomes.</span>
          <textarea
            value={step6Data.budget}
            onChange={(e) => onInputChange('budget', e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Step6;
