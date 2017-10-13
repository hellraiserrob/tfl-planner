import React, { Component } from 'react';


import './JourneyResultsDuration.css'

class JourneyResultsDuration extends Component {

    
    render() {

        const { duration } = this.props



        return (

            <div className="journeyResultsDuration">

                <div>{duration}</div> mins

            </div>
        );
    }
}

export default JourneyResultsDuration