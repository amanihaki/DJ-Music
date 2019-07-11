import React from 'react';
import Header from './Header_admin';
import { withRouter } from 'react-router';
import Table from '../Table';
import Form from '../Form';
import Axios from 'axios';

class Gallery extends React.Component {

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
            const data = await fetch('http://localhost:4000/gallery')
            const response = await data.json();
            console.log('hi',response)
            this.setState({events:response });
                            console.log(this.state.events[15].title)
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
                <h1>Gallery Page</h1>
                <p>Add new fram  with a title and a description to the table.</p>
                <Table
                    eventData={events}
                    removeEvent={this.removeEvent}
                />
                <h3>Add New To Gallery</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}



export default withRouter(Gallery);

