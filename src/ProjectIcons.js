import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/pro-duotone-svg-icons';

function ProjectIcons({ github = "https://github.com/charleskantz", demo = "https://www.charleskantz.com" }) {
  return (
    <>
      <span><a href={demo}><FontAwesomeIcon icon={faExternalLinkAlt} /> Demo </a></span>
      <span className="projectTechSep"> | </span>
      <span><a href={github}><FontAwesomeIcon icon={faCodeBranch} /> Github </a></span>
    </>
  )
}

export default ProjectIcons;