import React from 'react';
import display from '../styles/styles';
// import RaisedButton from 'material-ui/RaisedButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col, Grid, Image} from 'react-bootstrap';
import Radium from 'radium';

let optionStyles = {
  margin: '20px 0'
}

let h4Styles = {
  ':hover': {
    cursor: 'pointer'
  }
};

function Option(props) {
  return(
    <Row style={optionStyles}>
      <Col xs={3} sm={4}>
        <Image src={props.thumbnail} responsive/>
      </Col>
      <Col xs={9} sm={8}>
        <h4
          onClick={props.handleClick}
          style={h4Styles}
          >{props.title}
        </h4>
        <br/>
        <p>{props.blurb}</p>
      </Col>
    </Row>
  );
}

export default Radium(Option);
