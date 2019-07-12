import React, { Component } from "react";
//import PublicApp from "./components/Puplic"
import { Link } from 'react-router-dom'
import "./App.css";

class Header extends Component {
      render() {
            return (
                  <div className="wrapper">
                        <header className="header_admin">

                              <nav>

                                    <div className="menu-admin">
                                          <ul>
                                          <li id="web"> <Link to="/"><strong>YourWebSite</strong></Link></li> 
                                                <li> <Link to="/admin/control">Home</Link></li> 
                                               
                                                <li>  <Link to="/admin/Gallery">Gallery</Link> </li>
 
                                                <li> <Link to="/admin/events">EVENTS</Link></li>
                                                <li> <Link to="/admin/music">MUSIC</Link></li>
                                              
                                          </ul>

                                    </div>
                              </nav>

                        </header>


                  </div>
            )
      }

}

export default Header;

