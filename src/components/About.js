import React from 'react';
import data from '../personalData';

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-container">
          <h1>About Me</h1>
          {data.aboutParagraphs?.map((paragraph, index) => (
            <div className="content" key={index}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
