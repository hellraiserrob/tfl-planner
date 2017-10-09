import React, { Component } from 'react';
import Status from '../Status/Status'

class Landing extends Component {
    render() {

        const { status, refresh } = this.props

        return (
            <div>
                
                <Status status={status} refresh={refresh} />
            </div>
        );
    }
}

export default Landing;
