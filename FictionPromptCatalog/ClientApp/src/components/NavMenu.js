import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Navbar, Nav, Container, Button, OverlayTrigger, Popover } from 'react-bootstrap';

function NavMenu() {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);

  return (
    <header>
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
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Popover bottom</Popover.Header>
                  <Popover.Body>
                    <strong>Holy guacamole!</strong> Check this info.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="secondary">Popover on bottom</Button>
            </OverlayTrigger>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
