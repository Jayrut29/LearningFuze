import React from 'react';
import display from '../styles/topicStyles';

function Topic(props) {
  return(
    <div
      onClick={props.handleClick}
      style={display.topic}>
      <span
        style={display.topicText}>
        {props.category}
      </span>
    </div>
  )
}
export default Topic;
