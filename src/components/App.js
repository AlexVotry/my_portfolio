import React, { Component } from 'react';
import './App.scss';
import ProjectCarousel from './ProjectCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        App
        <ProjectCarousel />
      </div>
    );
  }
}

export default App;
