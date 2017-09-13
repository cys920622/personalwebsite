import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RecommendationItem.css';

/* Blockquote styling credit: https://www.webmaster-source.com/2012/04/24/pure-css-blockquote-styling/ */

export default class RecommendationItem extends Component {
  render() {
    return (
      <div className="recommendation-item">
        <blockquote className="recommendation-body">
          {this.renderParagraphs()}
          <cite><a href={this.props.linkedInUrl}>{this.props.name}</a>, {this.props.position}</cite>
        </blockquote>
      </div>
    );
  }

  renderParagraphs() {
    return this.props.body.map((para) => {
      return (<p key={para}>{para}</p>);
    });
  }
}

RecommendationItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  body: PropTypes.array,
  linkedInUrl: PropTypes.string
};
