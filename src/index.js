import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Layout from './components/Layout';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Footer />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
