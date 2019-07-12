import React, { Component} from "react";
import Icon from "./icons"
import Footer from "./footer";
import Image from "./img/dj.jpg"
//import Header from "./header"
/*import "./armada.css";*/


class Home extends Component{
    




    render(){
        return(
            <div>
            
               <div className="title" >
                     <h1 >DOUG MARSHALL</h1>
                     <h6>
                      Live performance dj and<br/>
                      producer from London
                     </h6>
              </div>
                <img className="background" src={Image}/>
                <h2 className="about-Us">ABOUT US</h2>
                <Icon/>
               
                <Para/>
                <Footer/>
            </div>
            )
    }};
    class Para extends Component{

      
        render(){
            return(
                <div class="content">
                   <p className="para">
                      
                      Djing for the past six years, Doug has become the familiar sound at some of the worlds most exclusive clubs and events. With residencies in London at Lou Lou’s 5 Hertford Street, The Arts Club and Soho house, and internationally The Armani Prive Club, Milan and Club Silencio in Paris. His style, personality and knowledge tailor’s the perfect atmosphere for each event.  Performances at five Brit awards parties in a row, Canne Film Festival, MTV EMAs Milan, Radio 1 Ibiza Opening party and the Warner Music Grammy party in New York, have led him to play alongside some of the most credible acts in the business such as Mark Ronson, Pete Tong MBE, Jazzy Jeff, Grandmaster Flash, Ed Sheeran, Diplo, David Guetta and many more. His impressive knowledge of diverse musical genres and personable character have gained him an ample celebrity following. Previous private clients include Karlie Kloss, Natalia Vodianova, Frank Lampard, Peter Jones and Ant and Dec.
    For the events, I will try to get my next event details as soon as possible.
                     </p>
                   
                </div>
                      )}
                    }; 





export default Home;