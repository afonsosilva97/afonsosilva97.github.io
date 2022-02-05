import React from 'react';
import data from '../personalData';

const Skills = ({ sectionHeader, skillsArray }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>{sectionHeader}</h1>
          <div className="skills-grid">
            {skillsArray?.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                {/* <span role="img" aria-label="Emoji">
                  ⭐⭐⭐⭐
                </span> */}
                <p>{skill.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
