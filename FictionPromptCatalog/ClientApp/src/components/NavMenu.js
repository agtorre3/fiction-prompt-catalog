import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavMenu = (props) => {
  const logout = async () => {
    await fetch('http://localhost:5199/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    props.setUsername('');
    window.location.href = '/';
  }

  let menu;

  if (props.username === undefined || props.username === '') {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item active">
          <Link to="/sign-up" className="nav-link">Sign Up</Link>
        </li>
      </ul>
    )
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0 flex gap-4 align-items-center">
        <li className="nav-item active">
          <span>Hello {props.username}!</span>
        </li>
        <li className="nav-item active">
          <Button variant="dark" onClick={logout}>Logout</Button>
        </li>
      </ul>
    )
  }

  return (
    < header >
      <Navbar expand="lg" className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow bg-white">
        <Container>
          <Navbar.Brand as={Link} to="/">Adopt a Plot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/counter">Browse</Nav.Link>
              <Nav.Link as={Link} to="/fetch-data">Create</Nav.Link>
            </Nav>
            <div>
              {menu}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
}

export default NavMenu;
