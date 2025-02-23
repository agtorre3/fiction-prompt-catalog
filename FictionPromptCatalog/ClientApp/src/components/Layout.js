import React, {useState} from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout({ children }) {
  const displayName = Layout.name;

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
