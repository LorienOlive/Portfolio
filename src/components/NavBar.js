import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from '../NavItem/NavItem.js';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import Radium from 'radium';

import '../styles/NavBar.css';

bootstrapUtils.addStyle(Navbar, 'custom');
bootstrapUtils.addStyle(NavItem, 'custom');


class NavBar extends Component {
  render() {
    return (
      <Navbar
        fixedTop
        fluid
        collapseOnSelect
        style={navBarStyle}
        bsStyle="default"
        className="custom-navbar">
        <Navbar.Toggle style={navToggleStyle} />
        <Navbar.Collapse style={navCollapseStyle}>
          <Nav pullLeft>
            <NavItem style={navItemStyle} eventKey={1} href="#homePage">HOME</NavItem>
            <NavItem style={navItemStyle} eventKey={2} href="#aboutPage">ABOUT</NavItem>
            <NavItem style={navItemStyle} eventKey={3} href="#workPage">WORK</NavItem>
            <NavItem style={navItemStyle} eventKey={4} href="#contactPage">CONTACT</NavItem>
          </Nav>
          <Nav style={navIconsStyle} pullRight>
            <NavItem style={navIconStyle} eventKey={1} href="https://github.com/LorienOlive"><i className="fa fa-github" aria-hidden="true" /></NavItem>
            <NavItem style={navIconStyle} eventKey={2} href="https://www.linkedin.com/in/lorien-olive/"><i className="fa fa-linkedin" aria-hidden="true" /></NavItem>
            <NavItem style={navIconStyle} eventKey={3} href="https://twitter.com/LorienOlive"><i className="fa fa-twitter" aria-hidden="true" /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const navBarStyle = {
  background: '#f8f7c4',
  width: '100vw',
  border: 'none',
  boxShadow: 'none',
};


const navIconsStyle = {
  marginRight: '14vw',
  marginTop: '-.5vw'
}

const navItemStyle = {
  fontFamily: 'Raleway',
  fontWeight: 300,
  color: 'black',
}

const navIconStyle = {
  fontSize: '1.6vw',
  fontWeight: 300,
  color: 'black',
  width: '3vw',
  height: '3vw',
  padding: '0 2.5vw 0 2.5vw',
  marginTop: '-.3vw',
}

const navCollapseStyle = {
  background: '#f8f7c4',
  border: 'none',
  boxShadow: 'none',
  paddingLeft: '7vw',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '110vw',
  zIndex: '1002'
}

const navToggleStyle = {
  position: 'absolute',
  left: '87.5vw',
  top: '0vw',
  zIndex: '1003'
}

export default Radium(NavBar);
