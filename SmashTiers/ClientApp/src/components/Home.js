import React, { Component } from 'react';
import './Home.css'

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div className="mainContainer">
      <div className="row">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Super_Smash_Bros._Ultimate_logo.svg/2000px-Super_Smash_Bros._Ultimate_logo.svg.png" className="col-xs-12"/>
      </div>
        <div className="row">
          <div className="titleDiv">
            <h1>Smash Tiers</h1>
            <p>Look Through your favorite characters information and create tier lists to share with your friends!</p>
          </div>
        </div>
      </div>
    );
  }
}
