import React from 'react';

const Step4 = ({ step4Data, onInputChange }) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Gaining Access to Marketing Software</h2>

        <label htmlFor="cms">CMS</label>
        <input
          type="text"
          id="cms"
          value={step4Data.cms}
          onChange={(e) => onInputChange('cms', e.target.value)}
          placeholder="CMS"
        />

        <label htmlFor="salesFunnel">Sales Funnel</label>
        <input
          type="text"
          id="salesFunnel"
          value={step4Data.salesFunnel}
          onChange={(e) => onInputChange('salesFunnel', e.target.value)}
          placeholder="Sales Funnel"
        />

        <label htmlFor="domainRegistrar">Domain Registrar</label>
        <input
          type="text"
          id="domainRegistrar"
          value={step4Data.domainRegistrar}
          onChange={(e) => onInputChange('domainRegistrar', e.target.value)}
          placeholder="Domain Registrar"
        />

        <label htmlFor="crm">CRM</label>
        <input
          type="text"
          id="crm"
          value={step4Data.crm}
          onChange={(e) => onInputChange('crm', e.target.value)}
          placeholder="CRM"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={step4Data.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          placeholder="Email"
        />

        <label htmlFor="sms">SMS</label>
        <input
          type="text"
          id="sms"
          value={step4Data.sms}
          onChange={(e) => onInputChange('sms', e.target.value)}
          placeholder="SMS"
        />
      </form>
    </div>
  );
};

export default Step4;
