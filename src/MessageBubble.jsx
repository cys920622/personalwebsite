import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css'

export default class MessageBubble extends Component {
  render() {
    return (
      <div className="message-bubble">
        <div className="clear"></div>
        <div className="from-them">
          <p className="message-text">{this.props.message}</p>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

MessageBubble.propTypes = {
  message: PropTypes.string
};