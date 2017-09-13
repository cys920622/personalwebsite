import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecommendationItem.css';

/* Blockquote styling credit: https://www.webmaster-source.com/2012/04/24/pure-css-blockquote-styling/ */

export default class RecommendationItem extends Component {
  render() {
    return (
      <div className="recommendation-item">
        <blockquote className="recommendation-body">
          {this.props.body}
          <cite>
            {this.props.name}, {this.props.position}
          </cite>
        </blockquote>
      </div>
    );
  }
}

RecommendationItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.string
};
