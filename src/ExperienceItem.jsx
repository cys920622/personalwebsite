import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ExperienceItem.css';

export default class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item" style={this.getLayoutDirection()}>
        <a className="experience-image" href={this.props.itemUrl}>
          <img src={this.props.imageUrl} alt={this.props.itemName} />
        </a>
        <div className="experience-text">
          <h3 className="experience-title">{this.props.itemName}</h3>
          <h4 className="experience-position">{this.props.position}</h4>
          <div className="experience-description">{this.props.description}</div>
        </div>
      </div>
    );
  }

  getLayoutDirection() {
    return this.props.isLayoutReversed ? { direction: "rtl" } : { direction: "initial" };
  }
}

ExperienceItem.propTypes = {
  itemName: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  itemUrl: PropTypes.string,
  isLayoutReversed: PropTypes.bool
};
