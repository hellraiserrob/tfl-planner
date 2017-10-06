import React, { Component } from 'react';

import JourneyResultsLeg from './JourneyResultsLeg'

// import JourneyPrices from '../JourneyPrices/JourneyPrices'

class JourneyResultsRoute extends Component {

    render() {

        const { duration, legs } = this.props

        // const first = legs[0]
        // let last = legs[0]

        // if(legs.length > 1){
        //     last = legs[legs.length-1]
        // }




        return (
            <div>
                
                {/* <p>
                    Price codes = {first.departurePoint.naptanId} to {last.arrivalPoint.naptanId}
                </p>

                <JourneyPrices from={first.departurePoint.naptanId} to={last.arrivalPoint.naptanId} /> */}

                <small>Duration: {duration} minutes</small>

                {legs.map((leg, index) => <JourneyResultsLeg {...leg} key={index} />)}

                <hr />


            </div>
        );
    }
}

export default JourneyResultsRoute
