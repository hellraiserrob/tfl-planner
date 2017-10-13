import React, { Component } from 'react';

import JourneyResultsMode from './Meta/JourneyResultsMode'
import JourneyResultsDuration from './Meta/JourneyResultsDuration'
import JourneyResultsRouteOptions from './Meta/JourneyResultsRouteOptions'

import './JourneyResultsLeg.css'

class JourneyResultsLeg extends Component {

    render() {

        const { duration, departurePoint, instruction, path, mode, routeOptions } = this.props

        // console.log(this.props)


        return (

            <div className="journeyResultsLeg">

                <div className="leg-summary">


                    <JourneyResultsMode mode={mode} />


                    {instruction.summary}

                    <JourneyResultsDuration duration={duration} />


                </div>


                {/* <div>{instruction.detailed}</div> */}
                {/* {departurePoint.commonName} > {arrivalPoint.commonName} ({duration} minutes) */}

                <JourneyResultsRouteOptions options={routeOptions}>
                    
                    <ul className="stopping">
                        <li><div className="marker"></div>{departurePoint.commonName}</li>
                        {path.stopPoints.map((stopPoint, index) => {
                            return <li key={index}><div className="marker"></div> {stopPoint.name}</li>
                        })}
                        {/* <li>{arrivalPoint.commonName}</li> */}
                    </ul>

                </JourneyResultsRouteOptions>


                



            </div>
        );
    }
}

export default JourneyResultsLeg
