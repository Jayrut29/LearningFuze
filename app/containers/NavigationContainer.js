import React from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import {Link} from 'react-router';

const NavigationContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{
      topic: '',
      category: ''
    }
  },

  handleFrontendClick(e){
    console.log('handling frontend click');
    let topicName = e.target.innerText;
    console.log('this.context.router:', this.context);
    this.context.router.push({
      pathname: '/Frontend',
      query: {
        topic: e.target.innerText
      }
    })
  },

  handleBackendClick(e){
    console.log('handling backend click');
    let topicName = e.target.innerText;
    this.context.router.push({
      pathname: '/Backend',
      query: {
        topic: e.target.innerText
      }
    })
  },

  addTutorial(){
    console.log('handling add tutorial click');
    this.context.router.push({
      pathname: '/AddTutorial'
    })
  },

  render(){
    return(
      <Navigation
        handleFrontendClick={this.handleFrontendClick}
        handleBackendClick={this.handleBackendClick}
        addTutorial={this.addTutorial}
        show={this.props.show}
        handleAdd={this.props.handleAdd}
        />
    )
  }
})

export default NavigationContainer;
