// src/Step3.js
import React from 'react';

const Step3 = ({
  step3Data,
  onInputChange
}) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Granting Access to Google Accounts</h2>

        <label htmlFor="googleAdAccounts">Google Ad Accounts</label>
        <input
          type="text"
          id="googleAdAccounts"
          value={step3Data.googleAdAccounts}
          onChange={(e) => onInputChange('googleAdAccounts', e.target.value)}
          placeholder="Google Ad Accounts"
        />

        <label htmlFor="analytics">Analytics 4</label>
        <input
          type="text"
          id="analytics"
          value={step3Data.analytics}
          onChange={(e) => onInputChange('analytics', e.target.value)}
          placeholder="Analytics 4"
        />

        <label htmlFor="tagManager">Tag Manager</label>
        <input
          type="text"
          id="tagManager"
          value={step3Data.tagManager}
          onChange={(e) => onInputChange('tagManager', e.target.value)}
          placeholder="Tag Manager"
        />

        <label htmlFor="googleMyBusiness">Google My Business Profile</label>
        <input
          type="text"
          id="googleMyBusiness"
          value={step3Data.googleMyBusiness}
          onChange={(e) => onInputChange('googleMyBusiness', e.target.value)}
          placeholder="Google My Business Profile"
        />
      </form>
    </div>
  );
};

export default Step3;
