import React, { Component} from "react";
import "./header.css";
import logo from "./img/logo.png";
import {NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div class="wrapper">
            <header>

                  <nav>

                        <div class="menu-icon">
                              <i class="fa fa-bars fa-2x"></i>
                        </div>

                        <div class="logo">

                          <NavLink to="/">  <img className="logo" activeClassName="activeStyle" src={logo}/></NavLink>

                             
                        </div>

                        <div class="menu"> 
                              <ul>
                                  <li>  <NavLink activeClassName="active" to="/gallery">Gallery</NavLink> </li>
                                    <li> <NavLink activeClassName="active" to="/events">EVENTS</NavLink></li>
                                    <li> <NavLink activeClassName="active" to="/music">MUSIC</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                              </ul>
                           
                        </div>
                  </nav>

            </header>
            
      
      </div>
        )
    }
    
}

export default Header;