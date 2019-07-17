import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header_admin';
import Admin from './Admin'
import Gallery from './Gallery_admin'
import Musicani from './Music_admin'
import Home from './Home_admin';

class Control extends Component {
  render () {
    return (
      <div>
      <Header/>
      
      <Route path="/admin/control" exact component={Home} />
      <Route path="/admin/events" component={Admin} />
      <Route path="/admin/gallery" component={Gallery}/>
      <Route path="/admin/music" component={Musicani}/>
    
      </div>
    );
  }
}

export default Control;
