import React, { Component } from "react";
import image from "./assets/ab1.jpg";
import Card from './component/card';

class AboutUs extends Component {
  render() {
    return (
        <Card>
        <h2>MORE ABOUT-US...!</h2>

<div>
  

  
  <p><i>
    Check this out for more Information about us....
  </i>
  </p>
  <img src={image} alt="ab1" width="100px" height="100px"></img>
  
</div>


<p>
  In publishing and graphic design, Lorem ipsum is a placeholder text
  commonly used to demonstrate the visual form of a document or a
  typeface witho
</p>

</Card>
        
    );
  }
}
export default AboutUs;
