import React from 'react';
import OptionContainer from '../containers/OptionContainer'
import About from './About'
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

const Home = React.createClass({
  render(){
    return(
      <div className="">
        <About/>
        <OptionContainer/>
      </div>
    )
  }
})

export default Home;
