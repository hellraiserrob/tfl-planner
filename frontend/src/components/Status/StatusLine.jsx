import React, { Component } from 'react';

import StatusLineState from './StatusLineState'

class StatusLine extends Component {

    
    render() {

        const { name, lineStatuses } = this.props



        return (
            <div>
                {name}

                {lineStatuses.map((state, index) => <StatusLineState {...state} key={index} />)}

                <hr />
            </div>
        );
    }
}

export default StatusLine;
