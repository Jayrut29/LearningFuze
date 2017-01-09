import React from 'react';
import AddContainer from '../containers/AddContainer';
import NavigationContainer from '../containers/NavigationContainer';
import Footer from './Footer';
require('../styles/styles.css');

import {Grid, Row, Col} from 'react-bootstrap';

const Main = React.createClass({
  render(){
    return(
      <div id="wrapper">
        <NavigationContainer
          handleAdd={this.handleAdd}/>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Main;
