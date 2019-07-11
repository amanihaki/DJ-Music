import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header_admin';
import Admin from './Admin'
import Gallery from './Gallery_admin'



class Control extends Component {
  render () {
    return (
      <div>
      <Header/>
      {/* <Admin/> */}
      <Route path="/admin/events" component={Admin} />
      <Route path="/admin/gallery" component={Gallery}/>
        
      </div>
    );
  }
}

export default Control;
