import React,{Component} from "react";
import image from "./assets/contacts1.jpg";
import Card from './component/card';

class Contact extends Component{

    render(){
        return(
            <Card>
        <h2>CONTACT</h2>

        <div>
          
          <p>
              <i>
            Feel free to reach out...!
            </i>
          </p>

        
          <img src={image} alt="contacts1" width="100px" height="100px"></img>
        </div>

        
        <p>
        Portsmouth, NH (U.S. Office) 
Address
1 Harbour Pl, Suite 175
Portsmouth, NH 03801
United States

Phone
1 888 HUBSPOT
        </p>
       
      </Card>
        )
    }
}
export default Contact;