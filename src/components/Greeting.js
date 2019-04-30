import React, { Component } from 'react';
import { webDev, createWebDev } from '../utils/webDev';
import MyName from './MyName';

class Greeting extends Component {

  componentDidMount() {
    this.anime();
  }

  createWebDev() {
    return createWebDev();
  }

  anime = async () => {
    await webDev();
  };

  render() {
    return (
      <div className="myName">
        <MyName />
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
