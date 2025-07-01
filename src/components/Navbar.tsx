import React from 'react';
import * as data from '../personalData';

const Navbar: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="section">
            <h1>{data.default.name}</h1>
            <h3>{data.default.profession}</h3>
          </div>
          <div className="links-wrapper">
            {/* <button onClick={() => console.log('#work')}>Work</button> */}
            {/* <button onClick={() => scrollTo('#about')}>About</button>
            <button onClick={() => scrollTo('#contact')}>Contact</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
