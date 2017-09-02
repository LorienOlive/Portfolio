import React, { Component } from 'react';
import {React_Bootstrap_Carousel as ReactBootstrapCarousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import '../styles/Work.css'


class Carousel extends Component {

  onSelect= (active,direction)=>{
    console.log(`active=${active} && direction=${direction}`);
}
  render() {
    return(
      <div className="carousel-container">
          <ReactBootstrapCarousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div className="carousel-pic1">
            </div>
            <div className="carousel-pic2">
            </div>
            <div className="carousel-pic3">
            </div>
            <div className="carousel-pic4">
            </div>
            <div className="carousel-pic5">
            </div>
            <div className="carousel-pic6">
            </div>
            <div className="carousel-pic7">
            </div>
            <div className="carousel-pic8">
            </div>
            <div className="carousel-pic9">
            </div>
            <div className="carousel-pic10">
            </div>
          </ReactBootstrapCarousel>
      </div>
      )
  }
}

export default Carousel;
