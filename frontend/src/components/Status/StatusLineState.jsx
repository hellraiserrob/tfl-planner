import React, { Component } from 'react';

class StatusLineState extends Component {

    
    render() {

        const { statusSeverityDescription, reason } = this.props

        return (
            <div>
                {statusSeverityDescription !== 'Good Service' && 
                    <div className="grid">
                        <div className="unit one-third">{statusSeverityDescription}</div>
                        <div className="unit two-thirds">{reason}</div>
                    </div>
                }
            </div>
        );
    }
}

export default StatusLineState;
