import React from 'react';
import './../App.css';

const questions = [
  'Many of these women are desperate single moms and unfaithful wives looking for having fun. They could be your neighbors or someone you know. Do you agree to keep their identity a secret?',
  'These women have asked us to not allow men who are seeking a "long-term relationship" to contact them. They only desire to have a nice chat, not to go on a date. Do you agree to this request?',
  'Do you agree to be jovial and pleasant when meeting with a lovable partner you have met on our site?',
  'Each day that you check your account you will likely have multiple dating requests from women on our site. Will you be comfortable with this?',
]

export class SimpleQuestion extends React.Component  {

  handleAnimation = () => {
    let elem = document.getElementById("window");
    if(this.props.number < 5 && elem.classList !== null) {
      elem.classList.remove("animation");
      setTimeout(e =>{elem.classList.add(e)}, 1, "animation");
    }
  }

  componentDidUpdate() {
    this.handleAnimation();
  }

  render() {
    let n = this.props.number;
    let content = questions[n-1];
    return (
      <div id="window" className="window animation">
          <div className="header_window">
            Question <span className={ n === 1 ? "circle active" : "circle"}>1</span>
            <span className={ n === 2 ? "circle active" : "circle"}>2</span>
            <span className={ n === 3 ? "circle active" : "circle"}>3</span>
            <span className={ n === 4 ? "circle active" : "circle"}>4</span>
          </div>
          <div className="question_block">
            <p>{content}</p>
          </div>
          <div className="btn_block">
            <div className="btn green" onClick={e => this.props.callback('q' + n, true)}>
              YES
            </div>
            <div className="btn red" onClick={e => this.props.callback('q' + n, false)}>
              NO
            </div>
          </div>
      </div>
    );
  }
}
