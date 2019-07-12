import React from "react";
import Home from "./home";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Gallery from "./gallery";
import Contact from "./Contact";
import Events from "./Events";
import App from "./Music";
//import Header from "./header";
// import Header from "./header";




function PublicApp() {
    return (

        <Router>
            <div>
                {/* <Header /> */}
            
                <Route path='/' exact component={Home} />
                <Route path='/gallery' component={Gallery} />
                <Route path='/events' component={Events} />
                <Route path='/contact' component={Contact} />
                <Route path='/music' component={App} />




            </div>
        </Router>


    )
}


export default PublicApp;

