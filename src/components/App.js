import React, { Component } from 'react';

import '../styles/App.css';

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Work from '../components/Work'
import About from '../components/About';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavBar />
          <div className="scroll-container">
            <Home />
            <About />
            <Work />
            <Contact />
          </div>
      </div>
    );
  }
}

export default App;
