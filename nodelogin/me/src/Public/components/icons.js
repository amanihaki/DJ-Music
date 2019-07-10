import React, { Component} from "react";
import "./armada.css";


class Icon extends Component{
    render(){
        return(
         
            <div class="middle">
          
            <a class="btn" href="#">
            <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn" href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn" href="#">
              <i class="fab fa-google"></i>
            </a>
            <a class="btn" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="btn" href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        )
    }
}
export default Icon;