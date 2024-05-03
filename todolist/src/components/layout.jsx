import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
   
      <main>{children}</main>
      
    </div>
  );
}

export default Layout;