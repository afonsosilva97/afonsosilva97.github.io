import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './personalData';

import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* <Header></Header> */}
      <Skills sectionHeader="Tech Stack" skillsArray={data.techStack}></Skills>
      <Experience></Experience>
      {/* <Projects></Projects> */}
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
