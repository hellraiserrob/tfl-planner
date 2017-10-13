import React, { Component } from 'react';


import Tube from './Images/tube.png'
import Walking from './Images/walking.png'

import './JourneyResultsMode.css'

class JourneyResultsMode extends Component {

    getMode(mode) {

        let src = ''

        switch (mode.name) {
            case 'tube':
                src = Tube
                break
            case 'walking':
                src = Walking
                break
            default:
                src = Tube
                break
        }

        return <img src={src} alt={mode.name} />
    }

    render() {

        const { mode } = this.props



        return (

            <div className="journeyResultsMode">

                {this.getMode(mode)}

            </div>
        );
    }
}

export default JourneyResultsMode
