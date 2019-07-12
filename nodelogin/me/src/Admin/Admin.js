import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import Axios from 'axios';

class Admin extends Component {
    state = {
        events: []
    };

    removeEvent = index => {
        const { events } = this.state;
    
        Axios.post('http://localhost:4000/delete', index)
    }
    async componentDidMount(e){
        console.log('hi')
        try{
            const data = await fetch('http://localhost:4000/event')
            const response = await data.json();
            console.log('hi',response)
            this.setState({events:response });
                            
        }
      catch(err){
          console.log(err)
      }
    }
    handleSubmit = async event => { try{
        const data = await fetch('http://localhost:4000/event')
        const response = await data.json();
        console.log('hi',response)
        this.setState({events:response });
                        
    }
  catch(err){
      console.log(err)
  }
    }

    render() {
        const { events } = this.state;
        
        console.log(events)
        return (
            <div className="container">
                <h1>Events Page</h1>
                <p>Add a event with a title and a description to the table.</p>
                <Table
                    eventData={events}
                    removeEvent={this.removeEvent}
                />
                <h3>Add New Event</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Admin;