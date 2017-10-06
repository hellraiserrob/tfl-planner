import React, { Component } from 'react';

import StatusLineState from './StatusLineState'

import './StatusLine.css'


class StatusLine extends Component {

    
    render() {

        const { name, lineStatuses, id } = this.props

        return (
            <div className={`statusLine ${id}`}>

                <div className="marker"></div>
                {name}

                {lineStatuses.map((state, index) => <StatusLineState {...state} key={index} />)}

            </div>
        );
    }
}

export default StatusLine;
