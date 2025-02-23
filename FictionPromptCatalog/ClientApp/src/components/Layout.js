import React from 'react';
import NavMenu from './NavMenu';

function Layout({ children }) {
  return (
    <div className="bg-indigo-950">
      <NavMenu />
      <div className="container mx-12 mt-12 mb-12 max-w-fit">
        {children}
      </div>
    </div>
  );
}

export default Layout;
