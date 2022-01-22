import React, { Component } from "react";
import image from "./assets/home1.jpg";
import Card from "./component/card";

class Home extends Component {
  render() {
    return (
      <Card>
        <h2>HOME</h2>
        

        <div>
          
          <p><i>
           Welcome to REACT...!
          </i></p>

          
          <img src={image} alt="home1" width="100px" height="100px"></img>
        </div>

        
        <p>
        “A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.” ~ Antoine de Saint-Exupery
        </p>
      </Card>
    );
  }
}
export default Home;
