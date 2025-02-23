import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Navbar, Nav, Container, Button, OverlayTrigger, Popover, Form } from 'react-bootstrap';

function NavMenu() {
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
                  <Popover.Header as="h3">
                    Not a member? <Link to="/signup">Sign up!</Link>
                  </Popover.Header>
                  <Popover.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="dark" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="outline-secondary">Login</Button>
            </OverlayTrigger>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
