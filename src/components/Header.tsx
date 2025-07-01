import React from 'react';
import * as data from '../personalData';

const Header: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="header-container">
          {/* <h1>Who am I?</h1> */}
          <p>
            Hi there, welcome to my website! My name is {data.default.name} and I'm a {data.default.age} years old
            software engineer from Portugal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
