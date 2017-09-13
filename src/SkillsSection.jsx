import React, { Component } from 'react';

// These two images are from https://www.galvanize.com/boulder/web-development.
import IconBackend from './images/icon-backend.png';
import IconFrontend from './images/icon-frontend.png';

import IconToolbox from './images/icon-toolbox.svg';

import './SkillsSection.css';

const skillSet = [
  {
    skillArea: "Front-end",
    skills: ["HTML", "CSS/LESS", "JavaScript", "React.js", "Angular2"],
    icon: IconFrontend
  },
  {
    skillArea: "Back-end",
    skills: ["Scala", "Java", "Node.js"],
    icon: IconBackend
  },
  {
    skillArea: "Tools",
    skills: ["VCS (Git, Mercurial)", "Jenkins CI", "Sumologic", "Interana", "IntelliJ IDEA", "SQL", "MongoDB"],
    icon: IconToolbox
  }
];

export default class SkillsSection extends Component {
  render() {
    return (
      <div className="skills-section">
        <h1>My Skills</h1>
        <h3>I can do a whole bunch of things!</h3>
        <div className="skills">{this.renderSkillArea()}</div>
      </div>
    );
  }

  renderSkillArea() {
    return skillSet.map((item) => {
      let skillBubbles = item.skills.map((skill) => {
        return (
          <a className="skill-bubble">{skill}</a>
        )
      });
      return (
      <div className="skill-area">
        <img
          className="skill-icon"
          src={item.icon}
          alt={item.skillArea}/>
        <h2>{item.skillArea}</h2>
        <div>{skillBubbles}</div>
      </div>
      );
    });
  }
}
