import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Public from './Public/Public';
import Control from "./Admin/controls";

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