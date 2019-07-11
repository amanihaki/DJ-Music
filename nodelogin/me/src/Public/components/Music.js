import React,{Component} from "react";
//import Header from "./header";
//import { isTemplateLiteral } from "@babel/types";
//import MusicPlayer from 'react-responsive-music-player';
//import SearchExample from "./search"
//import ReactAudioPlayer from 'react-audio-player';
// "./music.css";

// const movies =  [
//   { title: "X", url: 'http://localhost:3000/events/1.mp3'},
//   { title: "XX", url:'http://localhost:3000/events/2.mp3'},
//   { title: "XXX", url:'http://localhost:3000/events/3.mp3'},


// ]


const movies = [
  {
    title: 'Mad Max: Fury Road',
    para : 'Music1',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'The Hunger Games: Mockingjay Part 1',
    para : 'Music2',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Jurassic World',
    para : 'Music3',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Everest',
    para : 'Music4',
    poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Insurgent',
    para : 'Music5',
     poster: 'http://localhost:3000/events/1.mp3'
  },
  {
    title: 'Sicario',
    para : 'Music6',
     poster: 'http://localhost:3000/events/1.mp3'
  }
];
const Movie = (prop) => (
  <div>
    <div>
     <p> {prop.movie.para}</p>
     <audio controls src={prop.movie.poster} type="audio/mpeg"/>
    </div>
    <div class="music-player-container is-playing">

<div class="music-player">
  <div class="player-content-container">
    <h1 class="artist-name">Incubus</h1>
    <h2 class="album-title">Make Yourself</h2>
    <h3 class="song-title">"Stellar"</h3>
    <div class="music-player-controls">
      <div class="control-back"></div>
      <div class="control-play"></div>
      <div class="control-forwards"></div>
    </div>
  </div></div>
<div class="album">
  <div class="album-art"></div>
  <div class="vinyl"></div>
</div>

</div>
</div>
);



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(newSearch) {
    this.props.updateSearch(newSearch)
  }

  render() {
    return(
      <div>
        <div id="search-input">
          <input type="search" 
            placeholder="Find Music..."
            value={this.props.search} 
            onChange={this.updateSearch}
          />
          <i className="fa fa-search"></i>
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
      <main>
        
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


class App extends React.Component {
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
      {/* <Header/> */}
      <Main movies={movies}/>
      </div>
    )
  }
}





export default App;