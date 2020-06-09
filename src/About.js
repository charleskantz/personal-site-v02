import React from 'react';
import selfie from './images/ckantz_portrait_sm.jpg';

function About() {
  return (
    <div id="about" className="sectionContainer container">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
          <div className="selfPortrait">
            <img src={selfie} class="img-fluid" alt="portrait of Charles Kantz" />
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-6">
          <h2>About Charles</h2>
          <p>
            As a former designer of 12 years I have occasionally dipped
            my toes into coding for my projects. It wasn't until designing
            and implementing a fully working VR experience that I realized
            how much I enjoyed software development, even more than design.
            I took that as a sign and left my job to pursue this new love.
            I am now currently enrolled in the Rithm School where I will
            hone my skills and complete my transition to development!
          </p>
          <p>
            Outside of my career, I have spent most of my life in the Bay
            Area, aside from a few years in the suburbs of Portland. Besides
            immersing myself in development and design, you can find me
            enjoying sci-fi, photography, video games, baking bread, and
            the company of friends.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;