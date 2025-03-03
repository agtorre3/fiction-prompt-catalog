import React, {useState, useEffect} from 'react';
import NavMenu from './NavMenu';

function Layout({ children }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5199/api/user', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });

      const content = await response.json();
      setUsername(content.username);
    })();
  }, []);

  return (
    <div className="bg-indigo-950">
      <NavMenu username={username}/>
      <div className="container mx-12 mt-12 mb-12 max-w-fit">
        {children}
      </div>
    </div>
  );
}

export default Layout;
