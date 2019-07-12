import React from 'react';
import {withRouter} from "react-router";


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="comtrol_panel">
        <h3 className="h_control"> Control Panel</h3> 
        </div>
            </div>
        )
    }
}

export default withRouter(Home);