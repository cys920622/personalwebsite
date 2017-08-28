import React, { Component } from 'react';
import './NavigationBar.css';
import classNames from 'classnames';

export default class NavigationBar extends Component {
  render() {
    var cssClasses = classNames('navigation-bar', 'clearfix');
    return (
      <div className={cssClasses}>
        <div className="nav-bar-button-group-left">
          Daniel Choi
        </div>
        <div className="nav-bar-button-group-right">
          <button className="nav-bar-button" onClick={() => {this.b1Clicked()}}>B1</button>
          <button className="nav-bar-button" onClick={() => {this.b2Clicked()}}>B2</button>
          <button className="nav-bar-button" onClick={() => {this.b3Clicked()}}>B3</button>
        </div>
      </div>
    );
  }

  b1Clicked() {
    console.log("b1 clicked");
  }

  b2Clicked() {
    console.log("b2 clicked");
  }

  b3Clicked() {
    console.log("b3 clicked");
  }
}
