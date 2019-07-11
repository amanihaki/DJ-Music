import React,{Component} from "react";
import Header from "./header";

//import { isTemplateLiteral } from "@babel/types";
//import MusicPlayer from 'react-responsive-music-player';
//import SearchExample from "./search"
//import ReactAudioPlayer from 'react-audio-player';
import"./music.css";

// const movies =  [
//   { title: "X", url: 'http://localhost:3000/events/1.mp3'},
//   { title: "XX", url:'http://localhost:3000/events/2.mp3'},
//   { title: "XXX", url:'http://localhost:3000/events/3.mp3'},
const movies = [
  {
    title: 'Music1',
    para : 'Music1',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Music2',
    para : 'Music2',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Music3',
    para : 'Music3',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Music4',
    para : 'Music4',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Music5',
    para : 'Music5',
     poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Music6',
    para : 'Music6',
     poster: 'http://localhost:3000/events/1.mp3'
  }
];
const Movie = (prop) => (
  <div>
    <div >
     <p> {prop.movie.para}</p> <audio className="control-audio" controls src={prop.movie.poster} type="audio/mpeg"/>
    </div>
    
</div>
);



class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch=(newSearch)=> {
    this.props.updateSearch(newSearch)
  }

  render() {
    return(
      <div >
        <div  id="search-input">
          <input id="search_bar" type="search" 
            placeholder="Find Music..."
            value={this.props.search} 
            onChange={this.updateSearch}
          />
          {/* <i className="fa fa-search"></i> */}
        </div>
      
        
      </div>
    )
  }
}


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      search: ''
    };    
  }
  
  updateSearch(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
  }
  

  
  render() {
    const { search } = this.state;
    return(
      <main class="music_container">
        
        <Form search={search} updateSearch={this.updateSearch}/>
        
        <section id="movies">
          {
            this.props.movies
              .filter(movie => movie.title.toLowerCase()
              .includes(search.toLowerCase()))
              .map(movie => <Movie movie={movie}/>)
          }
        </section>
      
      </main>
    )
  }
}


class Musican extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       movies: movies
     }
  }
  render() {
    const {movies} = this.state;
    return(
      <div>
      <Header/>
      <Main movies={movies}/>
      </div>
    )
  }
}





export default Musican;