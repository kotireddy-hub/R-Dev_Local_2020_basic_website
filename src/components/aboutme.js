import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div> 
        <h1 style={{textAlign: 'center'}}>Aout US</h1>
        <img src="images/about-1024x683.jpg" alt="" title="" media-simple="true"  style={{width: '41%',float:"left",padding:'30px'}} />
          <span  style={{position: 'absolute',float:"left",padding:'62px'}}>
          MyTech  is a development center working with startups to large enterprises across the globe providing services in Web & Mobile Application Development. We work across different industry segments however we are more inclined towards IT, Retail, Hospitality, HealthCare, Consumer and Manufacturing. We are passionate about design & technology and are in a mission to help businesses improve their operational efficiency, productivity and reach out to a global audience. We are fanatic about design & usability and have all our developments design-driven. Our solutions & products are used by millions of people, so we make that extra effort to provide an intuitive and natural experience
            </span>
            </div>
    )
  }
}

export default About;
