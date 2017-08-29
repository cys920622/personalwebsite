import React, { Component } from 'react';
import './BioSection.css';
import ExternalLinkItem from './ExternalLinkItem';
import MessageBubble from './MessageBubble';
import pic from './images/headshot.png';

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section">
        <img className="head-shot" src={pic} alt="Bio headshot" />
        <div className="bio-right-section">
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
            />
            <ExternalLinkItem
              itemName="LinkedIn"
              externalUrl="https://www.linkedin.com/in/danielychoi"
            />
            <ExternalLinkItem
              itemName="Email"
              externalUrl="mailTo:daniel.choi@alumni.ubc.ca"
            />
          </div>
        </div>
      </div>
    );
  }
}