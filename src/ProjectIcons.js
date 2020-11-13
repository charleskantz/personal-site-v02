import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectIcons({ label, github = "https://github.com/charleskantz", demo = "https://www.charleskantz.com" }) {
  return (
    <div className="projectLinks">
      <span><a rel="noopener noreferrer" target="_blank" id={`p-out-demo-${label}`} href={demo}><FontAwesomeIcon className="iconLinks" icon={['fad', 'external-link-alt']} /> Demo </a></span>
      <span className="projectTechSep"> | </span>
      <span><a rel="noopener noreferrer" target="_blank" id={`p-out-gh-${label}`} href={github}><FontAwesomeIcon className="iconLinks" icon={['fad', 'code-branch']} /> Github </a></span>
    </div>
  )
}

export default ProjectIcons;