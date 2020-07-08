import React from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import AOS from 'aos';

// Font Awesome 5 Pro loading
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilRuler, faExternalLinkAlt, faCodeBranch, faFileAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons';

library.add(
  faPencilRuler,
  faExternalLinkAlt,
  faCodeBranch,
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faFileAlt,
  faEnvelope
);

// Animate On Scroll init
AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-out-quart',
  delay: 100,
  startEvent: 'load'
});


function App() {
  return (
    <div className="appContainer">
      <Navigation />
      <Container />
    </div>
  );
}

export default App;
