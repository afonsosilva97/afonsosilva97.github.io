import React from 'react';

import data from '../personalData';

const Header = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="header-container">
          {/* <h1>Who am I?</h1> */}
          <p>
            Hi there! My name is {data.name} and I'm a {data.age} years old software
            engineer from Portugal.
          </p>
          <p>
            I am mainly a backend developer who also has some frontend skills and is
            always willing to expand his software development abilities.
          </p>
          <p>
            Microsoft technologies such as C# and .NET have been the ones I've used more
            extensively, but that hasn't stopped from venturing into new projects using
            other technologies such as Python, JavaScript and React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
