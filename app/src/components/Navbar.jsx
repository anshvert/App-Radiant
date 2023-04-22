import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar({ isLoggedIn, user }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>App Radiant</Navbar.Brand>
                {isLoggedIn ? (
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <>
                                <Nav.Link as={NavLink} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/apps">
                                    Apps
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/logout">
                                    Logout
                                </Nav.Link>
                            </>
                        </Nav>
                        <Nav className="ml-auto">
                            <>
                                <img src={user?.icon} alt="User Icon" className="user-icon" />
                                <NavDropdown title={user?.name}>
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">LogOut</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                ) : (
                    <Nav className="me-auto">
                        <>
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/signup">
                                Signup
                            </Nav.Link>
                        </>
                    </Nav>
                )}

            </Container>
        </Navbar>
    );
}

export default NavBar;
