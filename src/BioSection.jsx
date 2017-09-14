import React, { Component } from 'react';
import './BioSection.css';
import ExternalLinkItem from './ExternalLinkItem';
import TypedMessage from './TypedMessage';

import HeadshotPhoto from './images/headshot.png';
import GithubIcon from './images/github.svg';
import LinkedInIcon from './images/linkedin-in.svg';
import EmailIcon from './images/email.png';
import ResumeIcon from './images/resume-icon.svg';
import Background from './images/bio_section_background.jpg';

const backgroundStyle = {
  backgroundImage: "url("+ Background +")",
  backgroundSize: "cover"
};

const externalLinkItems = [
  {
    itemName: "GitHub",
    externalUrl: "https://github.com/cys920622",
    imageUrl: GithubIcon
  },
  {
    itemName: "LinkedIn",
    externalUrl: "https://www.linkedin.com/in/danielychoi",
    imageUrl: LinkedInIcon
  },
  {
    itemName: "Email",
    externalUrl: "mailTo:daniel.choi@alumni.ubc.ca",
    imageUrl: EmailIcon
  },
  {
    itemName: "Resume",
    externalUrl: "https://github.com/cys920622/latex-resume/raw/master/Daniel-Choi-Resume.pdf",
    imageUrl: ResumeIcon
  },
];

const typedMessageStrings = [
  'I\'m a software developer.',
  'I build web applications.',
  'I build back-ends in Scala.',
  'I build front-ends in React.',
  'I build front-ends in Angular2.',
  'I teach computer science.'
];

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section" style={backgroundStyle}>
        <div className="bio-conent">
          <div className="bio-content-left">
            <img className="head-shot" src={HeadshotPhoto} alt="Bio headshot" />
          </div>
          <div className="bio-content-right">
            <div className="bio-paragraph">
              <span>Hi! I'm Daniel.</span>
              {this.renderTypedMessage()}
              <hr/>
            </div>
            {this.renderExternalLinkItems()}
          </div>
        </div>
        {this.renderLearnMore()}
      </div>
    );
  }

  renderTypedMessage() {
    return (
      <TypedMessage
        strings={typedMessageStrings}
      />
    );
  }

  renderExternalLinkItems() {
    return externalLinkItems.map((item) => {
      return (
        <ExternalLinkItem key={item.itemName} {...item} />
      )
    });
  }

  renderLearnMore() {
    return (
      <div className="learn-more">
        Learn more about me
        <br/>
        <i className="arrow down" />
      </div>
    );
  }
}