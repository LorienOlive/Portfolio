import React, { Component } from 'react';

import '../styles/Work.css'

import Carousel from './Carousel.js'

class Work extends Component {
  render() {
    return(
      <div className="work-container" id="workPage">
        <h1 className="work-dev-header">Work</h1>
        {/* <div className="work-project-wrapper" id="one"></div>
          <div className="work-flex-container" id="one-flex">
            <div className="work-window" id="one-window">
              <div className="work-screen"></div>
            </div>
            <div className="work-text-card" id="one-text">
              <h3 className="work-project-header">eCommerce Site</h3>
              <p className="work-project-description">Working with a team, I helped create a mock eCommerce site. We chose to create an agency where you can hire super-heroes (and villains) for everyday tasks. I focused on file architecture, and setting up Redux, as well as creating the functionality and design for the product details page.</p>
              <p className="work-project-tools">Tools: React, Redux, Sass, Node, and Postgres</p>
              <a className="work-code-link" src="#">Code</a>
              <a className="work-demo-link" src="#">Live</a>
            </div>
          </div>

        <div className="work-project-wrapper" id="two"></div>
          <div className="work-flex-container" id="two-flex">
            <div className="work-window" id="two-window">
              <div className="work-screen"></div>
            </div>
            <div className="work-text-card" id="two-text">
              <h3 className="work-project-header">Mock Etsy</h3>
              <p className="work-project-description"> Working collaboratively, I helped re-build the main category page of the Etsy site, using their API. When individual groups finished, all of the pages were merged on GitHub to create a fully functioning site. </p>
              <p className="work-project-tools">Tools: React, Bootstrap, GitHub</p>
              <a className="work-code-link" src="#">Code</a>
              <a className="work-demo-link" src="#">Live</a>
            </div>
          </div> */}

        <div className="work-project-wrapper" id="one"></div>
          <div className="work-flex-container" id="one-flex">
            <div className="work-window" id="one-window">
              <div className="screen-container">
                <div className="work-screen" id="snippets"></div>
              </div>
            </div>
            <div className="work-text-card" id="one-text">
              <h3 className="work-project-header">Snippets</h3>
              <p className="work-project-description">I created a website where users could store and share snippets of code in a variety of languages. The functionality also allowed users to login/sign-up, tag their own snippets, edit their own snippets and search/sort all snippets in a variety of ways. </p>
              <p className="work-project-tools">Tools: Node, Express, MongoDB</p>
              <a className="work-code-link" href="https://github.com/LorienOlive/week-eight-project">Code</a>
              <a className="work-demo-link" href="https://snippets-sharing.herokuapp.com/signup">Live</a>
            </div>
          </div>

        <div className="work-project-wrapper" id="two"></div>
          <div className="work-flex-container" id="two-flex">
            <div className="work-window" id="two-window">
              <div className="screen-container">
                <div className="work-screen" id="musicbox"></div>
              </div>
            </div>
            <div className="work-text-card" id="two-text">
              <h3 className="work-project-header">MusicBox</h3>
              <p className="work-project-description">I created this website as a simple audio player and search engine for songs, artists, and albums from the Soundcloud API.</p>
              <p className="work-project-tools">Tools: Vanilla JavaScript, CSS, GitHub Pages</p>
              <a className="work-code-link" href="https://github.com/LorienOlive/week-four-project">Code</a>
              <a className="work-demo-link" href="https://lorienolive.github.io/week-four-project/">Live</a>
            </div>
          </div>

        <h1 className="work-dev-header" id="collage-header">Collage</h1>
          <Carousel />
      </div>
    )
  }
}



export default Work;
