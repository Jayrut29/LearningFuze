import React from 'react';
import display from '../styles/styles';

function CategoryHeader(props) {
  return(
    <div>
      <h1 style={display.categoryHeader}>{props.title}</h1>
    </div>
  )
}


export default CategoryHeader;
