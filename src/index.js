import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './personalData';

import Layout from './components/Layout';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* <Header></Header> */}
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
      {/* <Projects></Projects> */}
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
