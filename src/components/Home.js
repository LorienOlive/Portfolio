import React, { Component } from 'react';

import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="homePage">
        <div className="home-image">
          <h1 className="home-header">Lorien Olive</h1>
          <h3 className="home-subheader">Front-End Web Developer</h3>
        </div>
      </div>
    )
  }
}


export default Home;
