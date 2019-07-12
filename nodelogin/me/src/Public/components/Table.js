import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                
                <th>Control</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.eventData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td><img src={`http://localhost:4000/${row.image_path}`}style={{width:"200px"}} /></td>
                <td><button onClick={() => props.removeEvent(index)}>Delete</button> <button onClick={() => props.removeEvent(index)}>Edit</button> <button onClick={() => props.removeEvent(index)}>Save</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
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

export default Table;