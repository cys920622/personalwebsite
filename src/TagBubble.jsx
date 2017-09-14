import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TagBubble.css';

export default class TagBubble extends Component {
  render() {
    return (
      <a className="tag-bubble" key={this.props.itemName}>{this.props.itemName}</a>
    );
  }
}

TagBubble.propTypes = {
  itemName: PropTypes.string,
  itemUrl: PropTypes.string,
};
