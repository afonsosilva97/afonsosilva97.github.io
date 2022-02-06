import React from 'react';
import data from '../personalData';

const Experience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="experience-container">
          <h1>Experience</h1>
          {data.experience.map((experience, index) => (
            <div className="experience" key={index}>
              <div className="experience-header">
                <img src={experience.img} alt="css"></img>
                <p className="company-name">{experience.companyName}</p>
                <p className="experience-duration">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="experience-paragraph">
                <p>{experience.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
