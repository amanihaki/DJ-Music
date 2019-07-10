import React from 'react';
import Home from './Home_admin'
import Events1 from "./Events_admin";
import Gallery1 from "./Gallery_admin";
import Login from "./Login";
import Music1 from "./Music_admin";
import Header from './Header_admin'
//import Input from '@material-ui/core/Input';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Control extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     events: {
  //       name: '',
  //       description: ''
  //     }
  //   }
  // }
  // handleClick = () => {
  //   alert('goo 123d')
  // }


  render() {


    return (

      <div>
       <Header/>
        <div>
      
          <Route path='/admin' exact component={Login} />
          <Route path='/admin/control/gallery' exact component={Gallery1} />
          <Route path='/admin/control/events' exact component={Events1} />
          <Route path='/admin/control/music' exact component={Music1} />


            

         home page
        </div>
      </div>
    );
  }
}


export default Control;
