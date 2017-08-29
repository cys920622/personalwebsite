import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.css'

export default class ProjectItem extends Component {
  render() {
    var backgroundStyle = {
      background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.25)), url(' + this.props.imageUrl + ')',
      backgroundSize: 'cover'
    };
    return (
      <div className="project-item"
           style={backgroundStyle}>
        <div className="project-text">
          <div className="project-title">{this.props.projectName}</div>
          <div className="project-description">
            <a href={this.props.url}>{this.props.description}</a>
          </div>
        </div>
      </div>
    );
  }

  getProjectImage() {
    if (this.props.imageUrl) {
      return (<img src={this.props.imageUrl} alt="project"/>);
    } else {
      return (<img alt="default-project"/>);
    }
  }
}

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string
};