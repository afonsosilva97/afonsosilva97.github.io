import React from 'react';
import * as data from '../personalData';

const Footer: React.FC = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1>Profiles</h1>
          <div className="social-icons">
            {data.default.social.map((socialLink, index) => (
              <a key={index} href={socialLink.url} target="_blank" rel="noopener noreferrer">
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
