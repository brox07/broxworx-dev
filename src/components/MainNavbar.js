import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import TayMade from '../pages/TayMade';
import Admin from '../pages/admin/Admin';

import '../styles/MainNavbar.css';

// router dependencies
import { Route, Link, Routes, Outlet } from 'react-router-dom';

function MainNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">broxworx.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ></Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="">
                  Taylor Made Esthetics Landing Page</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects/taymade" element={<TayMade/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default MainNavbar;