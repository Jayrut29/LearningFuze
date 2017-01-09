import React from 'react';
import {Link} from 'react-router';
import display from '../styles/styles.js';
import {Grid, Row, Col} from 'react-bootstrap';

const About = React.createClass({
  render(){
    return(
      <div className="about">
        <Grid>
          <Row className="title">
            <Col>
              <h1 style={{textAlign:'center', fontFamily: 'Oswald, serif', fontWeight: '600'}}>LearningFuze</h1>
            </Col>
          </Row>
          <Row className="tagline">
            <Col>
              <h2 style={{textAlign:'center', fontFamily: 'Oswald, serif', fontWeight: '300'}}>Less Seaching...More Learning </h2>
            </Col>
          </Row>
          <Row className="info">
            <Col>
              <h3 style={{textAlign:'center', fontFamily: 'Oswald, serif', fontWeight: '300'}}>Find the right learning resource for learning morden web application development</h3>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
})

export default About;
