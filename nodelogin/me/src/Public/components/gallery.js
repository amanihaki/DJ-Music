import React from "react";
//import Header from "./header";

import Footer from './footer';
import "./gallery.css"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox"; 





class Gallery extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      description: '',
      images: [ ],
      photoIndex: 0,
      isOpen: false,
     
    };
  }
  async componentDidMount (e) {
    console.log ('hi');
    try {
      const data = await fetch ('http://localhost:4000/gallery');
      const response = await data.json ();
      console.log ('hi', response);
      this.setState ({gallary_img: response});
      console.log (this.state.events);
    } catch (err) {
      console.log (err);
    }
  }


  render () {
    return (
      <div>

        {this.state.gallary_img&& this.state.gallary_img.map ((event, index) => (
          
            <div key={index}>
              <div className="events">
                <img
                  className="imgE1"
                  src={`http://localhost:4000/${event.image_path}`}
                  alt="mee" style={{width:"300px"}} 
                 
                />
              
                  <div id="pE4">
                    <h3 className="event_title">{event.title}</h3>
                    <p className="paragraph"> {event.description}</p>
                  </div>
               
              </div>
            </div>
        
        ))} 

        <Footer />
      </div>
    );
  }
}
  
export default Gallery;
