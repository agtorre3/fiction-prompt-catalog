import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout'
import './custom.css';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5199/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });

      const content = await response.json();
      setUsername(content.username);
    })();
  }, [username]);

  return (
    <div className="bg-indigo-950">
      <BrowserRouter>
        <NavMenu username={username} setUsername={setUsername} />
        <div className="container mx-12 mt-12 mb-12 max-w-fit">
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/login" element={<Login setUsername={setUsername} username={username} />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;