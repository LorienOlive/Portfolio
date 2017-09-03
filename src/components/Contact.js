import React, { Component } from 'react';

import '../styles/Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact-container" id="contactPage">
        <h1 className="contact-header">Contact</h1>
        <div className='contact-wrapper'>
          <ul className="contact-list">
            <li className="contact-list-item">
              <a className="contact-links" href="lorien.olive@gmail.com"><i className="fa fa-envelope" aria-hidden="true" />
              <p className="contact-info">lorien.olive@gmail.com</p></a>
            </li>
            <li className="contact-list-item">
              <a className="contact-links" href="https://github.com/LorienOlive"><i className="fa fa-github" aria-hidden="true" />
              <p className="contact-info">LorienOlive</p></a>
            </li>
            <li className="contact-list-item">
              <a className="contact-links" href="https://www.linkedin.com/in/lorien-olive/"><i className="fa fa-linkedin" aria-hidden="true" />
              <p className="contact-info">lorien-olive</p></a>
            </li>
            <li className="contact-list-item">
              <a className="contact-links" href="https://twitter.com/LorienOlive"><i className="fa fa-twitter" aria-hidden="true" />
              <p className="contact-info">@LorienOlive</p></a>
            </li>
            <li className="contact-list-item">
              <a className="contact-links" href={process.env.PUBLIC_URL + "/lorien_olive_resume.pdf"} target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              <p className="contact-info">Resume</p></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
