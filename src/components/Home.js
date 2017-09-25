import React, { Component } from 'react';

import '../styles/Home.css'

import splash from '../styles/images/webpage-home2.png'

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="homePage">
        <img className="home-image" src={splash} alt="weird collage" />
        <div className="home-header-container">
          <h1 className="home-header">Lorien Olive</h1>
          <h3 className="home-subheader">Front-End Web Developer</h3>
        </div>
      </div>

    )
  }
}


export default Home;
