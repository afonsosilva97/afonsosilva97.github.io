import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import '../styles/mains.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
};
export default Layout;
