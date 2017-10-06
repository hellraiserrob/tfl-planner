import React, { Component } from 'react';

import JourneyPlannerResult from './JourneyPlannerResult'

class JourneyPlannerResults extends Component {

    render() {

        const { results } = this.props

        return (
            <div>
                
                <h5>Results</h5>

                {results.journeys.map((journey, index) => 
                    <JourneyPlannerResult {...journey} key={index} />
                )}


            </div>
        );
    }
}

export default JourneyPlannerResults
