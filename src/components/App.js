import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import Videos from './Videos';
import ProjectList from './ProjectList';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/my_portfolio" element={<Landing/>} />
          <Route path="/home" element={<Landing/>} />
          <Route path="/videos/:id" element={<Videos/>} />
          <Route path="/list" element={<ProjectList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
