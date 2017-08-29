import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExternalLinkItem extends Component {
  render() {
    return (
      <div className="external-link-item">
        <a
          className="external-link-item-title"
          href={this.props.externalUrl}
        >
          {this.props.itemName}
        </a>
      </div>
    );
  }
}

ExternalLinkItem.propTypes = {
  itemName: PropTypes.string,
  externalUrl: PropTypes.string,
  imageUrl: PropTypes.string
};