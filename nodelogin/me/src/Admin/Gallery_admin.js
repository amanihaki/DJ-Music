import React from 'react';
import Header from './Header_admin';
import { withRouter } from 'react-router';

class Gallrey extends React.Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <p>this is gallery page</p>


            </div>

        )
    }
}

export default withRouter(Gallrey);