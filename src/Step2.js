// src/Step2.js
import React from 'react';

const Step2 = ({
  step2Data,
  onInputChange
}) => {
  return (
    <div className="form-container">
      <form className="form-step">
        <h2>Granting Access to Social Media Accounts</h2>

        <label htmlFor="twitter">Twitter</label>
        <input
  type="text"
  id="twitter"
  value={step2Data.twitter}
  onChange={(e) => onInputChange('twitter', e.target.value)} // Pass 'twitter' instead of 2
  placeholder="Twitter"
/>

        <label htmlFor="tiktok">TikTok</label>
        <input
          type="text"
          id="tiktok"
          value={step2Data.tiktok }
          onChange={(e) => onInputChange( 'tiktok', e.target.value)}
          placeholder="TikTok"
        />

        <label htmlFor="facebook">FaceBook</label>
        <input
          type="text"
          id="facebook"
          value={step2Data.facebook || ''}
          onChange={(e) => onInputChange( 'facebook', e.target.value)}
          placeholder="FaceBook"
        />

        <label htmlFor="linkedin">Linkedin</label>
        <input
          type="text"
          id="linkedin"
          value={step2Data.linkedin || ''}
          onChange={(e) => onInputChange( 'linkedin', e.target.value)}
          placeholder="Linkedin"
        />

        <label htmlFor="linkedinBusiness">LinkedIn Business Profile</label>
        <input
          type="text"
          id="linkedinBusiness"
          value={step2Data.linkedinBusiness || ''}
          onChange={(e) => onInputChange( 'linkedinBusiness', e.target.value)}
          placeholder="LinkedIn Business Profile"
        />

        <label htmlFor="facebookBusiness">Facebook Business Profile</label>
        <input
          type="text"
          id="facebookBusiness"
          value={step2Data.facebookBusiness || ''}
          onChange={(e) => onInputChange( 'facebookBusiness', e.target.value)}
          placeholder="Facebook Business Profile"
        />

        <label htmlFor="twitterBusiness">Twitter Business Profile</label>
        <input
          type="text"
          id="twitterBusiness"
          value={step2Data.twitterBusiness || ''}
          onChange={(e) => onInputChange( 'twitterBusiness', e.target.value)}
          placeholder="Twitter Business Profile"
        />

        <label htmlFor="youtubeBusiness">YouTube Business Profile</label>
        <input
          type="text"
          id="youtubeBusiness"
          value={step2Data.youtubeBusiness || ''}
          onChange={(e) => onInputChange( 'youtubeBusiness', e.target.value)}
          placeholder="YouTube Business Profile"
        />

        <label htmlFor="tiktokBusiness">TikTok Business Profile</label>
        <input
          type="text"
          id="tiktokBusiness"
          value={step2Data.tiktokBusiness || ''}
          onChange={(e) => onInputChange( 'tiktokBusiness', e.target.value)}
          placeholder="TikTok Business Profile"
        />
      </form>
    </div>
  );
};

export default Step2;
