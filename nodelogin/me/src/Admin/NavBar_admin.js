import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';



class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="Events">Events</a></li>
                <li><a href="Gallery">Gallery</a></li>
                <li><a href="Music">Music</a></li>

                
                
              </ul>
            </div>
        );
    }
}

export default Navbar;