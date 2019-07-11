import React, { Component } from 'react';
import Axios from 'axios';



const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>title</th>
                <th>description</th>
                <th>date</th>
                <th>image</th>
                
                <th>control</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.eventData.map((row) => {
        return (
            <tr key={row.id}>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>{row.date}</td>
                <td><img src={`http://localhost:4000/${row.image_path}`}style={{width:"200px"}} /></td>
                <td><button>Delete</button> </td>
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