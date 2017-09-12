import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item">
        TODO
      </div>
    );
  }
}

ExperienceItem.propTypes = {
  itemName: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string
};
