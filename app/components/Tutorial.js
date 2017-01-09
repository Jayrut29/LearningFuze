import React from 'react';
import {Row, Col, Image, Media, Collapse, Button} from 'react-bootstrap';

const image = {
  height: '15vh',
  width: '15vh'
}

const Tutorial = React.createClass({
  render(){
    return(
      <Row>
        <Col xs={12}>
          {
            this.props.tutorials.map( (tutorial, i) => {
              return (
                <Row>
                  <Col className="container">
                    <Row key={i}>
                      <Col xs={3} sm={2}>
                        <Image responsive src={tutorial.screenShot}/>
                      </Col>
                      <Col xs={6}>
                        <a target="_blank" href={tutorial.url}>{tutorial.title}</a>
                        <p>Average Rating: {tutorial.meanRating}</p>
                        <p>{tutorial.summary}</p>
                      </Col>
                      <Col xs={3}>
                        <p><strong>Difficulty:</strong> {tutorial.difficulty}</p>
                        <p><strong>Length:</strong> {tutorial.length} hours</p>
                        <p><strong>Price:</strong> ${tutorial.price}</p>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <h4 style={{paddingLeft: '15px', marginTop:'0'}}>Reviews</h4>
                      {
                        tutorial.reviews.map( review => {
                          return (
                            <Col xs={8}>  <p>"{review.review}"</p>
                              <h6 style={{textIndent:'2.5em'}}>-{review.author}, {review.rating}/5</h6>
                            </Col>
                          );
                        })
                      }
                    </Row>
                  </Col>
                  <hr style={{borderTop: 'dotted 1px'}}/>
                </Row>
              );
            })
          }
        </Col>
      </Row>
    );
  }
})

export default Tutorial;
