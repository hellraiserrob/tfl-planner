import React, { Component } from 'react'

import './StatusLineIssue.css'

class StatusLineIssue extends Component {

    
    render() {

        const { statusSeverityDescription, reason } = this.props

        return (
            <div>
                {statusSeverityDescription !== 'Good Service' && 
                    <div className="statusLineIssue">
                        <h4 className="mb5">{statusSeverityDescription}</h4>
                        <small>{reason}</small>
                    </div>
                }
            </div>
        );
    }
}

export default StatusLineIssue;
