import React, { Component } from 'react';

import StatusLine from './StatusLine'

class Status extends Component {

    


    render() {

        // const { lines, isLoading } = this.state
        const { status, refresh } = this.props

        return (
            <div>

                <div className="mb30">

                    <h1 className="mb5">Service State</h1>

                    <hr />

                    <button className="btn" onClick={refresh}>Update</button>

                </div>

                {status.map((line, index) => <StatusLine {...line} key={index} />)}


            </div>
        );
    }
}

export default Status;
