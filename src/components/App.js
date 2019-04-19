import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import ProjectCarousel from './ProjectCarousel';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greeting />
        <ProjectCarousel />
        <div className="carouselBar">
          <div className="text">My Projects</div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
