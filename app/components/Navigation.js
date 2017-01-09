import React, {Component} from 'react';
import {Link} from 'react-router';
import display from '../styles/styles';
import {Grid, Col, Row, Nav, NavItem, Navbar} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Navigation extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><p>LearningFuze</p></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2}
              onClick={this.props.addTutorial}
              style={{paddingTop: '4px'}}>Add Tutorial</NavItem>
            <NavItem onClick={() => window.open('https://github.com/jayrut/learningfuze', '_blank')}>
              <FontAwesome className='fa-github' name="fa-github" size='2x'/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
