import React from 'react';
import data from '../personalData';

const Experience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="experience-container">
          <h1>Experience</h1>
          <div className="experience-grid">
            {data.experience.map((experience, index) => (
              <div className="experience" key={index}>
                <img src={experience.img} alt="css"></img>
                <p className="experienceDuration">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
