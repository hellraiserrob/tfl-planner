import React, { Component } from 'react';

class StatusLineState extends Component {

    
    render() {

        const { statusSeverityDescription , reason } = this.props

        return (
            <div>
                {statusSeverityDescription}
                {reason}
            </div>
        );
    }
}

export default StatusLineState;
