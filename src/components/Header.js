import React from 'react';
import data from '../personalData';

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h2>
            Hi, I'm {data.name}{' '}
            <span role="img" aria-label="Emoji">
              👋
            </span>
          </h2>
          <p>{data.headerParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
