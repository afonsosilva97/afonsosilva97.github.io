import React from 'react';
import data from '../personalData';

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <h1>{data.name}</h1>
          <div className="links-wrapper">
            {/* <button onClick={() => scrollTo('#work')}>Work</button>
            <button onClick={() => scrollTo('#about')}>About</button>
            <button onClick={() => scrollTo('#contact')}>Contact</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
