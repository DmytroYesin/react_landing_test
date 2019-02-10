import React, {Fragment} from 'react';
import './../App.css';
import { SimpleQuestion } from './simpleQuestion';
import { CheckQuestion } from './checkQuestion';
import { ThankYou } from './thankYou';

export class QuestionPage extends React.Component  {
  constructor(props) {
  super(props);
    this.state = {
      current: 1,
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
    };
  }

  listOfAnswers = () => {
    let ans = this.state;
    let list = {};
    for(let i = 1; i < 9; i++) {
      list['answer' + i] = ans['q' + i];
    }
    return list;
  }

  callback = (qNumber, value) => {
    this.setState({[qNumber]: value, current: this.state.current + 1});
  }

  render() {
    let curr = this.state.current;
    return (
      <Fragment>
          <div className="header-text">
            <h5>
              A GIRL FLIRTBOOK IS BACK <br /> YOU WILL LIKELY SEE INTRIGUING
              PHOTOS OF LOCAL STUNNERS YOU KNOW ON THIS SITE
            </h5>
            <p>
            Before we can show you a list and photos of ladies who live nearby and are ready
            to <u>meet with you right now </u>, we need to ask a few quick questions.
            </p>
          </div>
          { curr < 5 && <SimpleQuestion number={curr} callback={this.callback} /> }
          { curr > 4 && curr < 9 && <CheckQuestion number={curr} callback={this.callback} /> }
          { curr === 9 && <ThankYou listOfAnswers={this.listOfAnswers()} /> }
      </Fragment>
    );
  }
}
