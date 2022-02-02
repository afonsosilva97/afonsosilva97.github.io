import React from 'react';
import Card from './atoms/Card';
import data from '../personalData';

const Projects = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="projects-wrapper">
          <h1>Projects</h1>
          <div className="grid">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
