import React, { Component } from 'react';
import "../css/home.css";
import { Grid, Cell } from 'react-mdl';
import { Zoom } from 'react-slideshow-image';
const images = [
  'images/slide_1.jpg',
  'images/slide_2.jpg',
  'images/slide_3.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

class Home extends Component {
  render() {
    return(
      <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
    )
  }
}

export default Home;
