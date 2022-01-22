import React,{Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Jobs from "./Jobs";
import AboutUs from "./AboutUs";




class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
            <h1><i>ASSIGNMENT 8-REACT</i></h1>
            <ul className="header">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/jobs">JOBS</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <li><NavLink to="/aboutus">ABOUT-US</NavLink></li>


            </ul>
            
               <div className="content card">
                
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/jobs" component={Jobs}/>
                <Route path="/aboutus" component={AboutUs}/>
            
              </div>
            </div>
            </HashRouter>
            
        )
    }
}
export default Main;
