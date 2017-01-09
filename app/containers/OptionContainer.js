import React from 'react';
import axios from 'axios';
import Option from '../components/Option';
import {Row, Col, Grid} from 'react-bootstrap';
import Radium from 'radium';


const OptionContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return{
      category: ''
    }
  },

  handleClick(e){
    let categoryName = e.target.innerText;
    this.context.router.push({
      pathname: '/Category',
      query: {
        category: e.target.innerText
      }
    })
  },

  render(){
    let rowStyle= {
      margin: '7% 0'
    };

    return(
      <Grid>
        <Row style={rowStyle}>
          <Col xs={12} sm={6}>
            <Option   handleClick={this.handleClick}    title="JavaScript"
            thumbnail="https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/js-665808cffb0c855700a2049a16ada01b.svg"
            blurb="The language of the web"/>
          </Col>
          <Col xs={12} sm={6}>
            <Option handleClick={this.handleClick} title="React"
            thumbnail="https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7d7d276fa08104b86c985d3afd0058fe.svg"
            blurb="Facebook's frontend framework"/>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col xs={12} sm={6}>
            <Option handleClick={this.handleClick} title="Node"
            thumbnail="https:////d1xwtr0qwr70yv.cloudfront.net/assets/tech/node-aa74347d8a25327f7fcf5a3065be6d36.svg"
            blurb="Server-side JavaScript"/>
          </Col>
          <Col xs={12} sm={6}>
            <Option handleClick={this.handleClick} title="HTML/CSS"
            thumbnail="https:////d1xwtr0qwr70yv.cloudfront.net/assets/tech/css-84497083e3ce9bc1af2dd397681c4cce.svg"
            blurb="The webpage markup language"/>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col xs={12} sm={6}>
            <Option handleClick={this.handleClick} title="Express"
            thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/440px-Expressjs.png"
            blurb="Your Main Middleware"/>
          </Col>
          <Col xs={12} sm={6}>
            <Option handleClick={this.handleClick} title="MongoDB"
            thumbnail="http://appv2.asustor.com/uploadIcons/0020_13878_1388394236_mongodb.png"
            blurb="NoSQL Data Language"/>
          </Col>
        </Row>
      </Grid>
    )
  }
})

export default Radium(OptionContainer);
