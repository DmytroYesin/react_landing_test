import React from 'react';
import './../App.css';

export class ThankYou extends React.Component  {

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
    console.log(this.props.listOfAnswers);
    return (
      <div id="window animation" className="window animation">
          <div className="header_window text-normal">
            Thank You.
          </div>
          <div className="question_block">
            <p>Based on your answers you may now see our list and photos of women who are in your area. Please keep their identity a secret.</p>
            <p className="text-margin">Click on the "Continue" button below to join our site and begin searching for women who live near you.</p>
          </div>
          <div className="btn_block">
            <a href="http://kxllq.adsb4track.com/click" className="btn next">
              Continue >>
            </a>
          </div>
      </div>
    );
  }
}
