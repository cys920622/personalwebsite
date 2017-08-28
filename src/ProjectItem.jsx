import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item">
        <div className="project-title">
          {this.props.projectName}
        </div>
        <div className="project-description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string
};