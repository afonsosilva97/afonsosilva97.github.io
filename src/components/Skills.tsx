import React from 'react';

interface Skill {
  img: string;
  paragraph: string;
}

interface SkillsProps {
  sectionHeader: string;
  skillsArray: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ sectionHeader, skillsArray }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>{sectionHeader}</h1>
          <div className="skills-grid">
            {skillsArray?.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
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
