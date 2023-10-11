// src/components/HelpButton.js
import React from 'react';
import PropTypes from 'prop-types';

const HelpButton = ({ onClick }) => {
  return (
    <button className="button help-button" onClick={onClick}>
      I Need Help
    </button>
  );
};

HelpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HelpButton;
