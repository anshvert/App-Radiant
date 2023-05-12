import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                                <Nav.Link as={NavLink} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/apps">
                                    Apps
                                </Nav.Link>
                            </>
                        </Nav>
                        <Nav className="ml-auto">
                            <>
                                <img src={user?.icon ?? appConstants.DEFAULT_USER_ICON} alt="XD" className="user-icon" />
                                <NavDropdown title={user?.name}>
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/logout">LogOut</NavDropdown.Item>
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
