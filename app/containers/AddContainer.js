import React from "react";
import Add from "../components/Add";
import axios from "axios"

let url = 'https://youtorial-backend.herokuapp.com/tutorials/';

const addPostAjax = function(tutorial) {
  console.log("in addpost");
  return axios.post(url + 'new', tutorial)
}

const AddContainer = React.createClass({
  getInitialState: function() {
    return {
      title:"",
      source: "",
      tutorialAuthor:"",
      category:"",
      topic:"",
      summary:"",
      meanRating:"",
      screenShot: "",
      reviews: [],
      reviewAuthor: "",
      rating: "",
      review: "1",
      reviewObject: {},
      url: "",
      length: "",
      difficulty: "1",
      price:"",
      prereqs: []
    }
  },
  validatePrice() {
    let price = this.state.price;
    if (/^\d\d*$/g.test(price)) return 'success';
    else if (!price) return '';
    else return 'error';
  },
  validateDuration() {
    let length = this.state.length;
    if (/^\d\d*$/g.test(length)) return 'success';
    else if (!length) return '';
    else return 'error';
  },
  handleTitle: function(e){
    this.setState({
      title: e.target.value,
    })
  },
  handleSource: function(e){
    this.setState({
      source: e.target.value,
    })
  },
  handleTutorialAuthor: function(e){
    this.setState({
      tutorialAuthor: e.target.value,
    })
  },
  handleCategory: function(e){
    this.setState({
      category: e.target.value,
    })
  },
  handleTopic: function(e){
    this.setState({
      topic: e.target.value,
    })
  },
  handleSummary: function(e){
    this.setState({
      summary: e.target.value,
    })
  },
  handleURL: function(e){
    this.setState({
      url: e.target.value,
    })
  },
  handleLength: function(e){
    this.setState({
      length: e.target.value,
    })
  },
  handleDifficulty: function(e){
    this.setState({
      difficulty: e.target.value,
    })
  },
  handlePrice: function(e){
    this.setState({
      price: e.target.value,
    })
  },
  handlePrereqs: function(e){
    console.log("in handlePrereqs");
    this.setState({
      prereqs: e.target.value.toLowerCase().split(" ")
    })
  },
  handleReviewAuthor: function(e){
    this.setState({
      reviewAuthor: e.target.value,
    })
  },
  handleReview: function(e){
    this.setState({
      review: e.target.value,
    })
  },
  handleRating: function(e){
    this.setState({
      rating: e.target.value,
    })
  },
  handleReviews: function(e){
    console.log("In handleReviews");
    this.setState({
      reviews: reviews.push("hello")
    })
  },
  handleSubmit: function(e){
    const tutorial = {
      title: this.state.title,
      source: this.state.source,
      tutorialAuthor: this.state.tutorialAuthor,
      category: this.state.category,
      topic: this.state.topic,
      summary: this.state.summary,
      meanRating: this.state.meanRating,
      screenShot: this.state.screenShot,
      reviews: [{
        reviewAuthor: this.state.reviewAuthor,
        review: this.state.review,
        rating: this.state.rating
      }],
      url: this.state.url,
      length: this.state.length,
      difficulty: this.state.difficulty,
      price: this.state.price,
      prereqs: [this.state.prereqs]
    };
    console.log("tutorial:", tutorial);
    addPostAjax(tutorial)
    .then(function(response){
      console.log("response:", response);
    })
  },
  render: function(){
    return(
      <Add
        onChangeTitle={this.handleTitle}
        onChangeSource={this.handleSource}
        onChangeTutorialAuthor={this.handleTutorialAuthor}
        onChangeCategory={this.handleCategory}
        onChangeDifficulty={this.handleDifficulty}
        onChangeTopic={this.handleTopic}
        onChangeSummary={this.handleSummary}
        onChangeURL={this.handleURL}
        onChangeLength={this.handleLength}
        onChangePrice={this.handlePrice}
        onChangePrereqs={this.handlePrereqs}
        onChangeReviewAuthor={this.handleReviewAuthor}
        onChangeReview={this.handleReview}
        onChangeReviews={this.handleReviews}
        onChangeRating={this.handleRating}
        onSubmit={this.handleSubmit}
        validatePrice={this.validatePrice}
        validateDuration={this.validateDuration}
      />
    )
  }
})

export default AddContainer;
