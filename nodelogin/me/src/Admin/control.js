import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header_admin';
import Admin from './Admin'
<<<<<<< HEAD
import Gallery from './Gallery_admin'
=======
import Gallery from './Gallery_admin';




>>>>>>> b82595f8a587b1d5cb159ddd1ebccb0ba0ac72e1
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
