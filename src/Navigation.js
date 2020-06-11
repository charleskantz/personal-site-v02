import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
} from 'react-bootstrap';

let Link = Scroll.Link;

// Scroll Animation Prefs
let SMOOTH = "easeInOutCubic";
let DURATION = 1500;
let DELAY = 0;

function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect className="py-4 sticky-top navFade" variant="dark" expand="md">
      <Navbar.Brand href="#home">Charles Kantz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Link
              className="nav-link"
              delay={DELAY}
              smooth={SMOOTH}
              duration={DURATION}
              to="home"
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="about">
              About
            </Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="work">
            Work
          </Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="experience">
            Experience
          </Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link btn btn-outline-primary ml-2" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="contact">
            Contact
          </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Navigation;