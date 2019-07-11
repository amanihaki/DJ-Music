import React, { Component } from 'react';
import MusicTable from '../Public/components/MusicTable';
import MusicForm from '../Public/components/MusicForm';
import Axios from 'axios';


class Music extends React.Component {
    state = {
        events: []
    };

  /*   removeEvent = index => {
        const { events } = this.state;
    
        Axios.post('http://localhost:4000/delete', index)
    } */
    async componentDidMount(e){
        console.log('hi')
        try{
            const data = await fetch('http://localhost:4000/Music')
            const response = await data.json();
            console.log('hi',response)
            this.setState({events:response });
                        
        }
      catch(err){
          console.log(err)
      }
    }
    handleSubmit = event => {
        this.setState({events: [...this.state.events, event]});
    }

    render() {
        const { events } = this.state;
        
        console.log(events)
        return (
            <div className="container">
                <h1>Music Page</h1>
                <p>Edit your Music.</p>
                <MusicTable
                    eventData={events}
                    removeEvent={this.removeEvent}
                />
                <h3>Add New Music</h3>
                <MusicForm  />
            </div>
        );
    }
}
export default Music;