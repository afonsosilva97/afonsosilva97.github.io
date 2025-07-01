import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as data from './personalData';

import Layout from './components/Layout';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

const app = (
  <React.StrictMode>
    <Layout>
      <Skills sectionHeader="Main Tech Stack" skillsArray={data.default.mainTechStack}></Skills>
      <Skills
        sectionHeader="Other Technologies & Skills"
        skillsArray={data.default.otherTechnologiesAndSkills}
      ></Skills>
      <Experience
        sectionHeader="Work Experience"
        experienceArray={data.default.workExperience}
      ></Experience>
      <Experience sectionHeader="Internships" experienceArray={data.default.internships}></Experience>
      <Experience sectionHeader="Education" experienceArray={data.default.education}></Experience>
      <About></About>
      <Footer></Footer>
    </Layout>
  </React.StrictMode>
);

root.render(app);
