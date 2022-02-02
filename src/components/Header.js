import React from 'react';
import data from '../personalData';

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <h1>Hi, I'm {data.name}!</h1>
          <p>{data.headerParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
