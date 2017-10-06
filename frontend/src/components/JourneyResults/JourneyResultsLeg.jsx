import React, { Component } from 'react';

class JourneyResultsLeg extends Component {

    render() {

        const { duration, departurePoint, arrivalPoint, instruction } = this.props

        return (
            <div>
                <h5>{instruction.summary}</h5>
                {departurePoint.commonName} > {arrivalPoint.commonName} ({duration} minutes)
            </div>
        );
    }
}

export default JourneyResultsLeg
