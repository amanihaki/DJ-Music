import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin/Admin';
import Public from './Public/Public'
import Control from "./Admin/control";

class App extends Component {
  
    render() {
        return (
            <Router>
            <div>
              <Route path="/admin" component={Control} />
              <Route path="/" component={Public} />

              {/* <Route path="/events" component={Admin}/> */}
             
            </div>
          </Router>
        );
    }
}

export default App;