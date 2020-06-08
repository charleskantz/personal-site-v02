import React from 'react';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let SMOOTH = "easeInOutCubic";
let DURATION = 1500;
let DELAY = 0;

function Navbar() {
  return (
    <div className="navbar">
      <h3>navbar</h3>
      <ul>
        <li><Link delay={DELAY} smooth={SMOOTH} duration={DURATION} to="home">Home</Link></li>
        <li><Link delay={DELAY} smooth={SMOOTH} duration={DURATION} to="about">About</Link></li>
        <li><Link delay={DELAY} smooth={SMOOTH} duration={DURATION} to="work">Work</Link></li>
        <li><Link delay={DELAY} smooth={SMOOTH} duration={DURATION} to="experience">Experience</Link></li>
        <li><Link delay={DELAY} smooth={SMOOTH} duration={DURATION} to="contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;