import React from 'react';
import display from '../styles/styles';

function FilterCategory(props) {
  return(
    <div>
      <hr style={{borderTop: 'dotted 1px'}}/>
      <h3>Narrow By:</h3>
      <div className="filter-bar">
        <select
          className="select-price"
          style={display.dropdown}
          onChange={props.handlePrice}>
          <option value="9999">Price</option>
          <option value="0">Free</option>
          <option value="50">Less than $50</option>
          <option value="100">Less than $100</option>
        </select>

        <select
          className="select-difficulty"
          style={display.dropdown}
          onChange={props.handleDifficulty}>
          <option value="">Difficulty</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          className="select-length"
          style={display.dropdown}
          onChange={props.handleLength}>
          <option value="9999">Length</option>
          <option value="5">Less than 5 hours</option>
          <option value="10">Less than 10 hours</option>
          <option value="11">10+ hours</option>
        </select>
      </div>
      <hr style={{borderTop: 'dotted 1px'}}/>
    </div>
  )
}

export default FilterCategory;
