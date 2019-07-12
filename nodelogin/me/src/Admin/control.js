import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header_admin';
import Admin from './Admin'
import Gallery from './Gallery_admin'
import Music from './Music_admin'
import Home from './Home_admin';

class Control extends Component {
  render () {
    return (
      <div>
      <Header/>
      
      <Route path="/admin/control" component={Home} />
      <Route path="/admin/events" component={Admin} />
      <Route path="/admin/gallery" component={Gallery}/>
      <Route path="/admin/music" component={Music}/>
        {/* <div className="comtrol_panel">
        <h3 className="h_control"> Control Panel</h3> 
        </div> */}
      </div>
    );
  }
}

export default Control;
