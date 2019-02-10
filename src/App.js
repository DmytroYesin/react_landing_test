import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import Bg from './images/1.jpg';
import tinder from './images/tinder.jpg';
import { QuestionPage } from './components/questionPage';

export class App extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      switcher: false,
    };
  }

  handleClick = () => {
    this.setState({ switcher: true })
  }

  render() {
    return (
      <Fragment>
        { this.state.switcher ? <QuestionPage /> :
          <div className="bg">
            <div className="wrap">
              <div className="img-left midle">
                <img src={Bg} alt='girl' />
              </div>
              <div className="right-text top">
                <h1>ATTENTION</h1>
                <div className="text-block">
                  you are about to uncover the <span><u>new </u>"meet local blacks women" </span>
                  that everyone is talking about...
                </div>
                <div className="tinder">
                  <span>Better than</span>
                  <img src={tinder} alt='tinder' />
                </div>
              </div>
              <div className="right-text bottom">
                <ul>
                  <li>* No Fake Profiles</li>
                  <li>* No disappointments</li>
                  <li>Just enter you zip and meet local women</li>
                </ul>
                <div className="main-btn" onClick={this.handleClick}>
                  click here to continue
                </div>
              </div>
            </div>
          </div>
          }
      </Fragment>
    );
  }
}
