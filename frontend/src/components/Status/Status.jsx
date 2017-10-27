import React, { Component } from 'react';

import StatusLine from './StatusLine'

class Status extends Component {

    formatDate(dt){

        const hours = (dt.getHours() < 10) ? `0${dt.getHours()}` : dt.getHours()
        const minutes = (dt.getMinutes() < 10) ? `0${dt.getMinutes()}` : dt.getMinutes()
        const seconds = (dt.getSeconds() < 10) ? `0${dt.getSeconds()}` : dt.getSeconds()

        return `${hours}:${minutes}:${seconds}`
    }

    render() {

        // const { lines, isLoading } = this.state
        const { status, refresh, updated } = this.props

        return (
            <div>

                <div className="mb30">

                    <h1>Service State</h1>

                    {/* <hr /> */}

                    <button className="btn" onClick={refresh}>Update</button>

                    {updated &&
                        <small className="inline-block ml10 text-muted">(Updated: {this.formatDate(updated)})</small>
                    }

                </div>

                <div className="fadeIn">
                    {status.map((line, index) => <StatusLine {...line} key={index} />)}
                </div>


            </div>
        );
    }
}

export default Status;
