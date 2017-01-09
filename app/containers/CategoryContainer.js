import React from 'react';
import axios from 'axios';
import CategoryHeader from '../components/CategoryHeader';
import FilterCategory from '../components/FilterCategory';
import Tutorial from '../components/Tutorial';
import ReviewContainer from './ReviewContainer';
import {Grid, Row, Col, Image} from 'react-bootstrap';

//let url = 'http://localhost:3000/tutorials/';
let url = 'https://youtorial-backend.herokuapp.com/tutorials/';

const CategoryContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return {
      category: '',
      tutorials: [],
      displayTutorials: [],
      filterPrice: '',
      filterLength: '',
      filterDifficulty: '',
      showModal: false,
      tutorialToReview: '',
      reviewIndex: ''
    }
  },

  handleAdd(e){
    let title = e.nativeEvent.path[1].childNodes[0].childNodes[1].childNodes[0].innerText;
    console.log(title);

    let index = this.state.tutorials.findIndex(x => x.title === title)
    console.log(index);

    axios.get(url + 'review/' + title)
    .then( response => {
      console.log('adding review for', response.data[0]);
      this.setState({
        tutorialToReview: response.data[0],
        reviewIndex: index
      })
      this.addOpen();
    })
  },

  displayAddForm(){
    return(
      <ReviewContainer
        tutorialToReview={this.state.tutorialToReview}
        close={this.addClose}
        updateTutorials={this.updateTutorials}
        index={this.state.reviewIndex}/>
    )
  },

  updateTutorials(index, update){
    let tutorials = this.state.tutorials;
    tutorials[index] = update;
    this.setState({
      tutorials: tutorials
    })
  },

  componentWillMount(){
    console.log('category container will mount');
    console.log('this.props.location:', this.props.location);
    const query = this.props.location.query;
    console.log(query);
    this.setState({
      category: query.category
    })
  },

  componentDidMount(){
    console.log('category container did mount');
    axios.get(url + this.state.category)
    .then(response => {
      console.log(response);
      this.setState({
        tutorials: response.data,
        displayTutorials: response.data
      })
    })
  },

  handlePrice(e){
    this.setState({
      filterPrice: e.target.value,
    })
    setTimeout(this.filterTutorials, 0);
  },

  handleDifficulty(e){
    this.setState({
      filterDifficulty: e.target.value
    })
    setTimeout(this.filterTutorials, 0);
  },

  handleLength(e){
    this.setState({
      filterLength: e.target.value
    })
    setTimeout(this.filterTutorials, 0);
  },

  filterTutorials(){
    console.log('filtering tutorials');
    let filterResults = this.state.tutorials.filter( tutorial => {
      if (parseInt(tutorial.price) <= parseInt(this.state.filterPrice) || this.state.filterPrice === '') {
        if (tutorial.difficulty == this.state.filterDifficulty || this.state.filterDifficulty === '') {
          if (parseInt(tutorial.length) <= parseInt(this.state.filterLength) || this.state.filterLength === '') {
            return true
          }
        }
      }
    })
    this.setState({
      displayTutorials: filterResults
    })

  },

  render(){
    return(
        <Grid>
          <Row>
            <Col>
              <CategoryHeader
                title={this.state.category}
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <FilterCategory
                tutorials={this.state.tutorials}
                handlePrice={this.handlePrice}
                handleDifficulty={this.handleDifficulty}
                handleLength={this.handleLength}
                filterTutorials={this.handleFilter}/>
            </Col>
          </Row>
          <Tutorial
            tutorials={this.state.displayTutorials}
            />
        </Grid>
    );
  }
})

export default CategoryContainer;
