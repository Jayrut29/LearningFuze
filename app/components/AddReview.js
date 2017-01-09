import React from 'react';
import display from '../styles/styles';

function AddReview(props) {
  return(
    <div>
      <h3>{props.tutorial.title}</h3>
      <hr/>
      <h4>Author</h4>
      <textarea
        placeholder="Your Name"
        onChange={props.handleReviewAuthor}>
      </textarea>
      <br />

      <h4 id="AddReviewReview">Review</h4>
      <textarea
        id="addReviewInput"
        rows="8"
        cols="40"
        onChange={props.handleReviewContent}>
      </textarea>

      <h4 id="reviewRating">Rating</h4>
      <select
        id="reviewDifficulty"
        defaultValue="1"
        onChange={props.handleReviewRating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />

      <button
        type="button"
        style={display.submitReviewBtn}
        onClick={props.submitReview}>
      Submit Review
      </button>
    </div>
  )
}

export default AddReview;
