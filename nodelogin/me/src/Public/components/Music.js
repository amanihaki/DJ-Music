import React from "react";
import Header from "./header";
import Fade from 'react-reveal/Fade';
import './Events.css';
import Footer from './footer';
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import "./gallery.css"
/* import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox"; */
//import "./Lightbox.css";

// import Img1 from "./img/1.jpg"
// import Img2 from "./img/2.jpg"
// import Img3 from "./img/3.jpg"
// import Img4 from "./img/4.jpg"





//       class Gallery extends React.Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 300,
//       arrows: false,
//       autoplay:true,
//       slidesToShow: 2,
//       cssEase: 'linear',
//       fade: true,
//       slidesToScroll: 1
//     };
//     return (
      
//         <div>
// <Header/>
//      <div>
//        <h2>SOME OF OUR IMAGES</h2>
//        </div>
      
     
    
     
//       <div>
      
//       <Slider className="slider" {...settings}>
       
    
//         <div>
//            <img className="slide_img" src={Img1} />
//         </div>
//         <div>
//         <img className="slide_img" src={Img2} /> 
//         </div>
//         <div>
//         <img className="slide_img" src={Img3} />
//         </div>
//         <div>
//         <img className="slide_img" src={Img4} />
     
//         </div>
        
//       </Slider>
//       </div>
    
//       </div>
//     );
//   }
// }

class Music extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      
      song: '',
    };
  }
  async componentDidMount (e) {
    console.log ('hi');
    try {
      const data = await fetch ('http://localhost:4000/music');
      const response = await data.json ();
      console.log ('hi', response);
      this.setState ({music: response});
      console.log (this.state.events);
    } catch (err) {
      console.log (err);
    }
  }

  render () {
    return (
      <div>
<Header/>
        {this.state.music&& this.state.music.map ((event, index) => (
          
            <div key={index}>
              <div className="events">
              <h3 className="event_title">{event.song_name}</h3>
              <audio controls src={`http://localhost:4000/${event.song_path}`} 
              type="audio/mpeg"/>

               
              </div>
            </div>
        
        ))} 

        <Footer />
      </div>
    );
  }
}
export default Music;