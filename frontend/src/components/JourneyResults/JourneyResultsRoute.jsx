import React, { Component } from 'react';

import './JourneyResultsRoute.css'

import JourneyResultsLeg from './JourneyResultsLeg'
import JourneyResultsDuration from './Meta/JourneyResultsDuration'

// import JourneyPrices from '../JourneyPrices/JourneyPrices'

class JourneyResultsRoute extends Component {


    formatDate(date) {

        // const monthNames = [
        //     "January", "February", "March",
        //     "April", "May", "June", "July",
        //     "August", "September", "October",
        //     "November", "December"
        // ]

        // const day = date.getDate()
        // const monthIndex = date.getMonth()
        // const year = date.getFullYear()
        
        const hours = date.getHours()
        const minutes = date.getMinutes()
        // const seconds = date.getSeconds()

        // return `${day} ${monthNames[monthIndex]} ${year} - ${hours}:${minutes}`

        return `${hours}:${minutes}`

    }

    render() {

        const { duration, legs, arrivalDateTime, startDateTime } = this.props

        const dateFrom = this.formatDate(new Date(startDateTime))
        const dateTo = this.formatDate(new Date(arrivalDateTime))


        // const first = legs[0]
        // let last = legs[0]

        // if(legs.length > 1){
        //     last = legs[legs.length-1]
        // }

        return (
            <div className="journeyResultsRoute">

                {/* <p>
                    Price codes = {first.departurePoint.naptanId} to {last.arrivalPoint.naptanId}
                </p>

                <JourneyPrices from={first.departurePoint.naptanId} to={last.arrivalPoint.naptanId} /> */}

                <div className="grid">

                    <div className="unit one-third">

                        <div className="route-summary">{dateFrom} - {dateTo} <JourneyResultsDuration duration={duration} /></div>
                        
                    </div>

                    <div className="unit two-thirds">

                        {legs.map((leg, index) => <JourneyResultsLeg {...leg} key={index} />)}

                    </div>

                </div>

        

                

            </div>
        );
    }
}

export default JourneyResultsRoute
