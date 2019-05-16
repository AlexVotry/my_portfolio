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
          <Route exact path="/videos/:id" exact component={Videos} />
          <Route exact path="/list" exact component={ProjectList} />
          <Route exact path="/" component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
