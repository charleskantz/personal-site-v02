import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import waveEmoji from './images/wave.png';
import { Image } from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact" className="sectionContainer text-center">
      <div>
        <h1>Get in Touch</h1>
          <div className="aboutRule mx-auto mt-3 mb-5"></div>
          <h5 data-aos="fade-up">For professional inquiries, please email me!</h5>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:kantz.charles@gmail.com"
          >
            <button className="mt-3 emailBtn" data-aos="fade-up">
              <FontAwesomeIcon icon={["far", "envelope"]} size="1x" />
              kantz.charles@gmail.com
            </button>
          </a>
          <h5 data-aos="fade-up">Reach out on social media if you want to say hello!</h5>
          <div data-aos="fade-up" className="contactSocials">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/charleskantz">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/charleskantz">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x"/>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/charleskantz">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/charleskantz">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
            </a>
          </div>
        <Image src={waveEmoji} />
      </div>
    </div>
  )
}

export default Contact;