import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CtaBanner({cta, link, icon}) {
  return (
    <div className="projectDesignBanner col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-4">

        <FontAwesomeIcon icon={icon} size="2x"/>
        <div>
          <span className="h6">{cta}</span><br />
          <span className="projectDesignLink">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link[1]}
            >
                {link[0]}
            </a>
          </span>
        </div>

    </div>
  )
}

export default CtaBanner;