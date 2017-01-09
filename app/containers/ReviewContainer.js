import React from 'react';
import axios from 'axios';
import AddReview from '../components/AddReview';

//let url = 'http://localhost:3000/tutorials/update/'
let url = 'https://youtorial-backend.herokuapp.com/tutorials/update/';

const ReviewContainer = React.createClass({
  getInitialState(){
    return {
      tutorial: this.props.tutorialToReview,
      reviews: this.props.tutorialToReview.reviews,
      reviewAuthor: '',
      reviewContent: '',
      reviewRating: 1,
    }
  },

  handleReviewAuthor(e){
    this.setState({
      reviewAuthor: e.target.value
    })
  },

  handleReviewContent(e){
    this.setState({
      reviewContent: e.target.value
    })
  },

  handleReviewRating(e){
    this.setState({
      reviewRating: parseInt(e.target.value)
    })
  },

  submitReview(){
    console.log('submitting review');
    this.props.close();
    const review = {
      author: this.state.reviewAuthor,
      review: this.state.reviewContent,
      rating: this.state.reviewRating
    }
    this.state.tutorial.reviews.push(review)
    console.log(review, 'has been added to', this.state.tutorial.reviews);

    this.props.updateTutorials(this.props.index, this.state.tutorial)
    this.updateDB();
  },

  updateDB(){
    axios.put(url + this.state.tutorial.title, this.state.tutorial)
    .then( response => {
      console.log(response);
    })
  },

  render(){
    return(
      <AddReview
        tutorial={this.props.tutorialToReview}
        handleReviewAuthor={this.handleReviewAuthor}
        handleReviewContent={this.handleReviewContent}
        handleReviewRating={this.handleReviewRating}
        submitReview={this.submitReview}/>
    )
  }
})

export default ReviewContainer;
