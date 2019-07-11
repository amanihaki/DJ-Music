import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>The Song</th>
                <th>Music</th>
                
                
                <th>control</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.eventData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.song_name}</td>
              
                <td> <audio controls src={`http://localhost:4000/${row.song_path}`} type="audio/mpeg"/></td>
               
                <td><button onClick={() => props.removeEvent(index)}>Delete</button> <button onClick={() => props.removeEvent(index)}>Edit</button> <button onClick={() => props.removeEvent(index)}>Save</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class MusicTable extends Component {
    render() {
        const { eventData, removeEvent } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody eventData={eventData} removeEvent={removeEvent} />
            </table>
            
        );
    }
}

export default MusicTable;