import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './personalData';

import Layout from './components/Layout';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Skills sectionHeader="Main Tech Stack" skillsArray={data.mainTechStack}></Skills>
      <Skills
        sectionHeader="Other Technologies & Skills"
        skillsArray={data.otherTechnologiesAndSkills}
      ></Skills>
      <Experience
        sectionHeader="Work Experience"
        experienceArray={data.workExperience}
      ></Experience>
      <Experience
        sectionHeader="Internships"
        experienceArray={data.internships}
      ></Experience>
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
