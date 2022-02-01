import React from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import '../styles/mains.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <Fade bottom>
        <main>{children}</main>
      </Fade>
    </>
  );
};
export default Layout;
