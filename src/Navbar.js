import React from 'react';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let SMOOTH = "easeInOutCubic";
let DURATION = 1500;
let DELAY = 0;

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg sticky-top navbar-dark navFade">
      <a className="navbar-brand" href="#home">Charles Kantz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" ><Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="home">Home</Link></li>
          <li className="nav-item" ><Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="about">About</Link></li>
          <li className="nav-item" ><Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="work">Work</Link></li>
          <li className="nav-item" ><Link className="nav-link" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="experience">Experience</Link></li>
          <li className="nav-item " ><Link className="nav-link btn btn-outline-primary ml-2" delay={DELAY} smooth={SMOOTH} duration={DURATION} to="contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;