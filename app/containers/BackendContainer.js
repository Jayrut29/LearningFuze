import React from 'react';
import axios from 'axios';
import Topic from '../components/Topic';
import Tutorial from '../components/Tutorial';
import {Link} from 'react-router';
import display from '../styles/topicStyles';
let url = 'http://localhost:3000/tutorials/';

const BackendContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      topic: '',
      tutorials: [],
      categories: []
    }
  },

  componentWillMount(){
    const query = this.props.location.query;
    console.log(query);
    this.setState({
      topic: query.topic.toLowerCase()
    })
  },

  componentDidMount(){
    axios.get(url + 'nav/' + this.state.topic)
    .then(response => {
      console.log(response);
      this.setState({
        tutorials: response.data,
        categories: this.getCategories(response.data)
      })
    })
  },

  getCategories(tutorials){
    console.log('getting categories');
    let categories = [];
    for (var i = 0; i < tutorials.length; i++) {
      if (categories.indexOf(tutorials[i].category) == -1) {
        categories.push(tutorials[i].category)
      }
    }
    console.log('categories are', categories);
    return categories;
  },

  handleClick(e){
    console.log('clicked option', e.target.innerText);
    this.context.router.push({
      pathname: '/Category',
      query: {
        category: e.target.innerText
      }
    })
  },

  capitalizeTitle(title){
    return title[0].toUpperCase() + title.slice(1)
  },

  render() {
    return (
      <div>
        <h1
          style={display.title}>{this.capitalizeTitle(this.state.topic)} Web Devlopment</h1>
        <h3
          style={display.subtitle}>Making the Web Function</h3>
        <hr/>
        <div>
          {
            this.state.categories.map( (category, i) => {
              return (
                <Topic
                  category={category}
                  handleClick={this.handleClick} />
              )
            })
          }
        </div>
      </div>
    )
  }
})

export default BackendContainer;
