import React, { Component } from 'react';
import './FooterSection.css';

export default class FooterSection extends Component {
  render() {
    return (
      <div className="footer-section">
        <div className="author">
          <div>handmade with React.js</div>
          <div>© daniel choi</div>
          <div>last updated September 2017</div>
          <a className="source-link" href="https://github.com/cys920622/personalwebsite">
            check out the source code on GitHub
          </a>
        </div>
      </div>
    );
  }
}
