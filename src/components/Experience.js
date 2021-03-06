import React from 'react';

const Experience = ({ sectionHeader, experienceArray }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="experience-container">
          <h1>{sectionHeader}</h1>
          {experienceArray?.map((experience, index) => (
            <div className="experience" key={index}>
              <div className="experience-header">
                <img src={experience.img} alt="css"></img>
                <p className="company-name">{experience.companyName}</p>
                <p className="title-text">{experience.title}</p>
                <p className="experience-duration">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="experience-description">
                {experience.descriptionParagraphs?.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
