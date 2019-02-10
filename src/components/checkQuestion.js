import React, {Fragment} from 'react';
import './../App.css';

const questions = [
  'What body type attracts you most?',
  'What age of women fits you best?',
  'What type of relationship do you seek?',
  'How far away should you two be from each other?',
]

const checkbox = [
  [ 'Feminine', 'Athletic', 'Curvy', 'BBW', 'Skinny', 'Regular', 'Other' ],
  [ '18 - 25', '25 - 32', '32 - 37', '37 - 45', '45 and above' ],
  [ 'A single date', 'Occasional dating', 'Regular flirty meetings', 'Dating', 'Marriage' ],
  [ 'Within walking distance', 'Same city', 'Nearby cities are OK', 'Same country', "Doesn't matter" ],
]

export class CheckQuestion extends React.Component  {
  constructor(props) {
  super(props);
    this.state = {
      checked: [],
    };
  }

  handleAnimation = () => {
    let elem = document.getElementById("window");
    if(this.props.number < 9 && elem.classList !== null) {
      elem.classList.remove("animation");
      setTimeout(e =>{elem.classList.add(e)}, 1, "animation");
    }
  }

  componentDidUpdate() {
    this.handleAnimation();
  }

  handleChange = (id) => {
    let arr = this.state.checked;
    let elemNumber = arr.indexOf(id);
    if(elemNumber === -1) {
      arr.push(id);
    } else {
      arr.splice(elemNumber, 1);
    }
  }

  handleCallback = () => {
    this.props.callback('q' + this.props.number, this.state.checked);
    this.setState({checked: []});
  }

  checkboxes = (list) => {
    return (
      <Fragment>
        {list.map(item => {
          return (
            <div className="answer_item" key={item}>
              <input type='checkbox' name={item} id={item} onChange={e => this.handleChange(e.target.id)}/>
              <label htmlFor={item}>{item}</label>
            </div>
          )}
        )}
      </Fragment>
    );
  }

  render() {
    let n = this.props.number;
    let content = questions[n-5];
    return (
      <div id="window" className="window animation">
          <div className="header_window text-normal">
            {content}
          </div>
          <div className="question_block">
            <span>(Please choose up to 3 answers)</span>
            <div className="answer_block">
              {this.checkboxes(checkbox[n-5])}
            </div>
          </div>
          <div className="btn_block">
            <div className="btn next" onClick={this.handleCallback}>
              NEXT >>
            </div>
          </div>
      </div>
    );
  }
}
