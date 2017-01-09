import React from 'react';
import { FormGroup, ControlLabel, FormControl, Radio, HelpBlock, Glyphicon, Button } from 'react-bootstrap';
import Radium from 'radium';

let styles = {
  margin: '2% 20%'
}

const Add = React.createClass({

  render: function() {
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>Add A Tutorial!</h2>
        <br />
        <form>

          <FormGroup style={styles} controlId="formBasicText">
            <ControlLabel>Tutorial Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="JavaScript: Understanding the Weird Parts"
              onChange={this.props.onChangeTitle}></FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText">
            <ControlLabel>URL</ControlLabel>
            <FormControl
              type="text"
              placeholder="https://www.udemy.com/understand-javascript/"
              onChange={this.props.onChangeURL}></FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText">
            <ControlLabel>Author, if applicable</ControlLabel>
            <FormControl
              type="text"
              placeholder="Anthony Alicea"
              onChange={this.props.onChangeTutorialAuthor}></FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText"
            onChange={this.props.onChangeCategory}>
            <ControlLabel>Language/Framework</ControlLabel>
            <br/>
            <Radio name='language' value='JavaScript' inline>JavaScript</Radio>
            <Radio name='language' value='React' inline>React</Radio>
            <Radio name='language' value='Node' inline>Node</Radio>
            <Radio name='language' value='HTML-CSS' inline>HTML/CSS</Radio>
            <Radio name='language' value='Express' inline>Express</Radio>
            <Radio name='language' value='MongoDB' inline>MongoDB</Radio>
          </FormGroup>

          <FormGroup style={styles} controlId="formControlsTextarea">
            <ControlLabel>Summary</ControlLabel>
            <FormControl
              componentClass="textarea"
              rows="3"
              placeholder="An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more."
              onChange={this.props.onChangeSummary}></FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText"
            validationState={this.props.validatePrice()}>
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              onChange={this.props.onChangePrice}></FormControl>
            <FormControl.Feedback/>
            <HelpBlock>Please Input An Integer, 0 if course is free</HelpBlock>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText"
            validationState={this.props.validateDuration()}>
            <ControlLabel>Duration</ControlLabel>
            <FormControl
              type="text"
              onChange={this.props.onChangeLength}></FormControl>
            <FormControl.Feedback/>
            <HelpBlock>Please Input An Integer For the Number of Hours</HelpBlock>
          </FormGroup>

          <FormGroup onChange={this.props.onChangeDifficulty} style={styles} controlId="formControlsSelect">
            <ControlLabel>Difficulty</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Advanced</option>
            </FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formBasicText">
            <ControlLabel>Review Author</ControlLabel>
            <FormControl
              type="text"
              placeholder="Buzz Lightyear"
              onChange={this.props.onChangeReviewAuthor}></FormControl>
          </FormGroup>

          <FormGroup style={styles} controlId="formControlsTextarea">
            <ControlLabel>Summary</ControlLabel>
            <FormControl
              componentClass="textarea"
              rows="4"
              placeholder="This class taught me the real JavaScript. Anthony understands how to pace the material and there's so much material to get your hands with dirty with. Great for the beginner JS developer who's looking to take his or her skills to the next level!"
              onChange={this.props.onChangeReview}></FormControl>
          </FormGroup>

          <FormGroup onChange={this.props.onChangeRating}
            style={styles} controlId="formControlsSelect">
            <ControlLabel>Your Rating</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </FormControl>
          </FormGroup>

          <Button bsStyle="success"
            onClick={this.props.onSubmit}
            style={{
              textAlign:'center',
              margin: '0 auto',
              display: 'block'
            }}>
            Success
          </Button>
          <br />
          <br />
        </form>
      </div>
    );
  }
})

export default Radium(Add);

/*

  <h4>On a scale of 1-5, please rate this tutorial</h4>
  <textarea onChange={this.props.onChangeRating}></textarea>
<br />
*/
