import React, { Component } from 'react';
import './BioSection.css';
import ExternalLinkItem from './ExternalLinkItem';
import TypedMessage from './TypedMessage';

import HeadshotPhoto from './images/headshot.png';
import GithubIcon from './images/github.svg';
import LinkedInIcon from './images/linkedin-in.svg';
import EmailIcon from './images/email.png';
import Background from './images/bio_section_background.jpg';

const backgroundStyle ={
  backgroundImage: "url("+ Background +")",
  backgroundSize: "cover"
};

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section" style={backgroundStyle}>
        <div className="bio-left-section">
          <img className="head-shot" src={HeadshotPhoto} alt="Bio headshot" />
        </div>
        <div className="bio-right-section">
          <div className="bio-paragraph">
            <span>Hi! I'm Daniel, and I am</span>
            {this.renderTypedMessage()}
            <hr/>
          </div>
          {this.renderExternalLinkItems()}
        </div>
      </div>
    );
  }

  //TODO: write some actual messages here
  renderTypedMessage() {
    return (
      <TypedMessage
        strings={[
          'a junior web developer',
          'a backend',
          'a frontend'
        ]}
      />
    );
  }

  renderExternalLinkItems() {
    return (
      <div className="external-link-items">
        <ExternalLinkItem
          itemName="GitHub"
          externalUrl="https://github.com/cys920622"
          imageUrl={GithubIcon}
        />
        <ExternalLinkItem
          itemName="LinkedIn"
          externalUrl="https://www.linkedin.com/in/danielychoi"
          imageUrl={LinkedInIcon}
        />
        <ExternalLinkItem
          itemName="Email"
          externalUrl="mailTo:daniel.choi@alumni.ubc.ca"
          imageUrl={EmailIcon}
        />
        <ExternalLinkItem
          itemName="Resume"
          externalUrl="https://github.com/cys920622/latex-resume/raw/master/Daniel-Choi-Resume.pdf"
        />
      </div>
    );
  }
}