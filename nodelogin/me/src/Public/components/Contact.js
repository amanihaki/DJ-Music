import React from "react";
import "./contact.css";
import lmage from "./img/logo.png"
import Footer from "./footer";




class Contact extends React.Component {
     state={

     }
    

    
    render() {
        return (


            <div className="contact-component">
               
                <img className="image" src={lmage} id="myimage"/>
                <div className="container" id="min">
                             <div>
                                 <h1 className="contact_me">Contact</h1>
                                  <p>For booking requests and collaborations</p>
                             </div>
                             <br/>
                           
                                <div className="move">
                                  <p id="p_1"><strong>Contact Number :</strong><a className="aLink" href="tel://1234567920">+ 1235 2355 98</a></p>
                                  <p id="p_2"><strong>Email :</strong><a className="aLink" href="tel://1234567920">info@yoursite.com</a></p>
                                  <p id="p_3"><strong>Website :</strong><a className="aLink" href="tel://1234567920">yoursite.com</a></p>
                                  
                                </div>
                             </div>
                               

             
                <Footer/>
                </div>
                )
            }
        }

    

export default Contact;