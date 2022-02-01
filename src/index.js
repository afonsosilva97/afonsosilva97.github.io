import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      {/* <Header></Header> */}
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
