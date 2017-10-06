import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import JourneyLookup from '../JourneyLookup/JourneyLookup'
import JourneyResults from '../JourneyResults/JourneyResults'
// import JoureyPlanner from '../JourneyPlanner/JourneyPlanner'

class Planner extends Component {

    render() {

        

        return (
            <div>
                <h3>journey</h3>

                <Route path="/planner/lookup" component={JourneyLookup} /> 
                <Route path="/planner/results/:from/:to" component={JourneyResults} /> 

                {/* <JoureyPlanner /> */}

            </div>
        );
    }
}

export default Planner;
