import React, { Component } from 'react';
import anime from 'animejs';
import { webDev, createWebDev } from '../utils/webDev';
import { myName, nameSvg } from '../utils/myName';

class Greeting extends Component {

  componentDidMount() {
    this.anime();
  }

  createWebDev() {
    return createWebDev();
  }
  createMyName() {
    return nameSvg();
  }

  anime = async () => {
    await webDev();
    myName();
  };

  render() {
    return (
      <div className="myName">
        {this.createMyName()}
        <h1 className="ml1">
          <span className="text-wrapper">
            <span className="line line1"></span>
            {this.createWebDev()}
            <span className="line line2"></span>
          </span>
        </h1>
      </div>
    )
  }

}

export default Greeting;