import React from 'react';

const generateTechTags = (tech, title) => {
  let tagString = [];
  for (let i = 0; i < tech.length; i++) {
    if (i === tech.length - 1) {
      tagString.push(<span key={`${title}-${i}`} className="projectTech">{tech[i]}</span>);
    } else {
      tagString.push(
        <span key={`${title}-${i}`} className="projectTech">{tech[i]} <span className="projectTechSep">| </span></span>
      );
    }
  }
  return tagString;
}

export default generateTechTags;