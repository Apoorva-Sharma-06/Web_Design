import React, { Component } from "react";
import image from "./assets/jobs1.jpg";
import Card from './component/card';

class Jobs extends Component {
  render() {
    return (
      <Card>
        <h2>WE ARE HIRING...!</h2>

        <div>
          
          <p>
            The First Friday Night of each month is a special night.
            Join us from 8pm to 11pm for ome music you wont't want to miss!
          </p>

          
          <img src={image} alt="jobs1" width="100px" height="100px"></img>
        </div>

        
        <p>
        “If you are an Amazing Software Engineer who wants to make great money working at an amazing company then keep reading!”
        </p>
       
      </Card>
    );
  }
}
export default Jobs;
