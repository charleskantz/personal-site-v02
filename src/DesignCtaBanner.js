import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DesignCtaBanner() {
  return (
    <div className="projectDesignBanner col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mb-4">

        <FontAwesomeIcon icon={['fad', 'pencil-ruler']} size="2x"/>
        <div>
          <span className="h6">Check out my design portfolio at</span><br />
          <span className="projectDesignLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://design.charleskantz.com"
            >
                design.charleskantz.com
            </a>
          </span>
        </div>

    </div>
  )
}

export default DesignCtaBanner;