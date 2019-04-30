import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
// import ProjectCarousel from './ProjectCarousel';
// import Greeting from './Greeting';
import Landing from './Landing';
import Videos from './Videos';
// import CarouselBar from './CarouselBar';
import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/videos/:id" exact component={Videos} />
          <Route path="/list" exact component={ProjectList} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
