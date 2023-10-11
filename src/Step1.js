// src/Step1.js
import React from 'react';

const Step1 = ({ step1Data, onInputChange }) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          value={step1Data.firstName}
          onChange={(e) => onInputChange('firstName', e.target.value)}
          placeholder="First Name"
        />

        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          value={step1Data.lastName}
          onChange={(e) => onInputChange('lastName', e.target.value)}
          placeholder="Last Name"
        />

        <label htmlFor="email">Point Of Contact Email *</label>
        <input
          type="email"
          id="email"
          value={step1Data.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          placeholder="Email"
        />

        <label htmlFor="phone">Point Of Contact Phone *</label>
        <input
          type="text"
          id="phone"
          value={step1Data.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
          placeholder="Phone"
        />

        <label htmlFor="organization">Business Name *</label>
        <input
          type="text"
          id="organization"
          value={step1Data.organization}
          onChange={(e) => onInputChange('organization', e.target.value)}
          placeholder="Organization"
        />

        <label htmlFor="website">Website *</label>
        <input
          type="text"
          id="website"
          value={step1Data.website}
          onChange={(e) => onInputChange('website', e.target.value)}
          placeholder="Web URL goes here"
        />

        <label htmlFor="address">Address *</label>
        <input
          type="text"
          id="address"
          value={step1Data.address}
          onChange={(e) => onInputChange('address', e.target.value)}
          placeholder="Address"
        />

        <label htmlFor="city">City *</label>
        <input
          type="text"
          id="city"
          value={step1Data.city}
          onChange={(e) => onInputChange('city', e.target.value)}
          placeholder="City"
        />

        <label htmlFor="state">State *</label>
        <input
          type="text"
          id="state"
          value={step1Data.state}
          onChange={(e) => onInputChange('state', e.target.value)}
          placeholder="State"
        />

        <label htmlFor="postalCode">Postal code *</label>
        <input
          type="text"
          id="postalCode"
          value={step1Data.postalCode}
          onChange={(e) => onInputChange('postalCode', e.target.value)}
          placeholder="Postal code"
        />

      </form>
    </div>
  );
};

export default Step1;
