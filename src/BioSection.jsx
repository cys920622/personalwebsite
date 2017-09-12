import React, { Component } from 'react';
import './BioSection.css';
import ExternalLinkItem from './ExternalLinkItem';
import MessageBubble from './MessageBubble';
import TypedMessage from './TypedMessage';

import HeadshotPhoto from './images/headshot.png';
import GithubIcon from './images/github.svg';
import LinkedInIcon from './images/linkedin-logo.png';
import EmailIcon from './images/email.png';

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section">
        <img className="head-shot" src={HeadshotPhoto} alt="Bio headshot" />
        <div className="bio-right-section">
          <TypedMessage
            strings={[
              'Some <i>strings</i> are slanted',
              'Some <strong>strings</strong> are bold',
              'HTML characters &times; &copy;'
            ]}
          />
          <MessageBubble message="Hi, nice to meet you!"/>
          <div className="bio-paragraph">
            <h2>I'm Daniel Choi</h2>
            <hr/>
            <p>Junior web developer with industry experience in React and Angular2 front-ends, and Scala back-ends.</p>
          </div>
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
        </div>
      </div>
    );
  }
}