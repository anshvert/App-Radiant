import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
const appConstants = require('../constants/appConstants')

function NavBar(props) {
  const {isLoggedIn,user} = props
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>App Radiant</Navbar.Brand>
        {isLoggedIn ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/apps">
                  <Nav.Link>Apps</Nav.Link>
                </LinkContainer>
              </>
            </Nav>
            <Nav className="ml-auto">
              <>
                <img src={user?.profileImage ?? appConstants.DEFAULT_USER_ICON} alt="XD" className="user-icon" />
                <NavDropdown title={user?.name}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/logout">
                    <NavDropdown.Item>LogOut</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Nav className="me-auto">
            <>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </>
          </Nav>
        )}

      </Container>
    </Navbar>
  );
}

export default NavBar;
