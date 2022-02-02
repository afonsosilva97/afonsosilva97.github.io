import React from 'react';
import data from '../personalData';

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div className="section">
            <h1>{data.name}</h1>
            <h3>{data.profession}</h3>
          </div>
          <div className="links-wrapper">
            <button onClick={() => console.log('#work')}>Work</button>
            {/* <button onClick={() => scrollTo('#about')}>About</button>
            <button onClick={() => scrollTo('#contact')}>Contact</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
