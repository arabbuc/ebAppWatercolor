import React from 'react';
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Watercolor from './components/Watercolor'
import {BrowserRouter as Router, Link, Route}  from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
      {/* <Gallery/> */}
      <Watercolor/>
    </div>
  );
}

export default App;
