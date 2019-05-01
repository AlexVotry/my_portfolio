import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Videos from './Videos';
import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route path="/videos/:id" exact component={Videos} />
          <Route path="/list" exact component={ProjectList} />
          <Route path="/" component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
