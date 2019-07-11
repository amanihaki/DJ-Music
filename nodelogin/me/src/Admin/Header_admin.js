import React, { Component } from "react";
import "./App.css";
import { Link } from 'react-router-dom'

class Header extends Component {
      render() {
            return (
                  <div class="wrapper">
                        <header className="header_admin">

                              <nav>

                                    <div class="menu-admin">
                                          <ul>
                                                <li> <Link to="/admin/control">Home</Link></li> 
                                               
<<<<<<< HEAD
                                                <li>  <Link to="/admin/Gallery">Gallery</Link> </li>
=======
                                                <li>  <Link to="/admin/gallery">Gallery</Link> </li>
>>>>>>> b82595f8a587b1d5cb159ddd1ebccb0ba0ac72e1
                                                <li> <Link to="/admin/events">EVENTS</Link></li>
                                                <li> <Link to="/admin/music">MUSIC</Link></li>
                                                {/* <li> <Link to="/"> go to your website</Link></li> */}
                                                {/* <Router>
                                                <Route path='/' component={PublicApp} />
                                                </Router> */}
                                          </ul>

                                    </div>
                              </nav>

                        </header>


                  </div>
            )
      }

}

export default Header;

