import React from 'react';
import Container from './Container.js';
import Navigation from './Navigation.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilRuler, faExternalLinkAlt, faCodeBranch } from '@fortawesome/pro-duotone-svg-icons';
import { faGithub, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons';

library.add(faPencilRuler, faExternalLinkAlt, faCodeBranch, faGithub, faInstagram, faTwitter, faLinkedinIn, faEnvelope);

function App() {
  return (
    <div className="appContainer">
      <Navigation />
      <Container />
    </div>
  );
}

export default App;
