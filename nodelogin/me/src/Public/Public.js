import React from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Gallery from "./components/gallery";
import Contact from "./components/Contact";
import Events from "./components/Events";
import App from "./components/Music";
import Header from "./components/header";




function PublicApp() {
    return (

        <Router>
            <div>
                <Header />
            
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

