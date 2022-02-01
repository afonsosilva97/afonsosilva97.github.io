import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* <Header></Header> */}
      <Skills></Skills>
      <Experience></Experience>
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
