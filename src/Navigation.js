import React from 'react';
import * as Scroll from 'react-scroll';
import {
  Navbar,
  Nav,
  NavItem,
  Container,
} from 'react-bootstrap';

let Link = Scroll.Link;

// Scroll Animation Prefs
let SMOOTH = "easeInOutCubic";
let DURATION = 1500;
let DELAY = 0;

function Navigation() {
  return (
    <div className="sticky-top navBar pt-3">
      <Navbar collapseOnSelect variant="dark" expand="md">
        <Container>
          <Link
            className="navbar-brand"
            delay={DELAY}
            smooth={SMOOTH}
            duration={DURATION}
            to="root"
            isDynamic={true}
          >
            Charles Kantz
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavItem>
                <Link
                  className="nav-link"
                  delay={DELAY}
                  smooth={SMOOTH}
                  duration={DURATION}
                  to="about"
                  isDynamic={true}
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  delay={DELAY}
                  smooth={SMOOTH}
                  duration={DURATION}
                  to="experience"
                  isDynamic={true}
                >
                  Experience
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  delay={DELAY}
                  smooth={SMOOTH}
                  duration={DURATION}
                  to="work"
                  isDynamic={true}
                >
                  Work
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link btn btn-outline-primary ml-2"
                  delay={DELAY}
                  smooth={SMOOTH}
                  duration={DURATION}
                  to="contact"
                  isDynamic={true}
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;