import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from './Header';
import ProjectCarousel from './ProjectCarousel';
import Greeting from './Greeting';
import Videos from './Videos';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Header />
        <Greeting />
        <ProjectCarousel />
        <div className="carouselBar">
          <div className="text">My Projects</div>
        </div>
        <div className="footer"></div>
        <Route path="/video" exact component={Videos} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
