import React, { Component } from 'react';

import '../styles/About.css'

class About extends Component {
  render() {
    return (
      <div className="about-container" id="aboutPage">
        <div className="about-frame">
          <h1 className="about-header">About Me</h1>
            <p className="about-paragraph">
              My name is Lorien Olive. I'm a front-end web developer living in Durham, North Carolina. In an past life, I was an anthropologist and documentary filmmaker. When I code, I can't help but think about all the ways that human-beings will interact with the applications I build. I hope to develop beautiful UI for technology that matters. When I'm not at my keyboard, I'm hiking along the Eno with the pups.
            </p>
        </div>
      </div>
    )
  }
}

export default About;
