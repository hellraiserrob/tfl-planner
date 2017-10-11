import React, { Component } from 'react';
import { Route } from 'react-router-dom'


import JourneyLookup from '../JourneyLookup/JourneyLookup'
import JourneyResults from '../JourneyResults/JourneyResults'
// import JoureyPlanner from '../JourneyPlanner/JourneyPlanner'

class Planner extends Component {

    render() {

        

        return (
            <div>
                <h1 className="">Journey Planner</h1>


                {/* <hr /> */}

                <Route path="/planner/lookup/:from?/:to?" component={JourneyLookup} /> 
                <Route path="/planner/results/:from/:to/:fromId/:toId" component={JourneyResults} /> 

                {/* <JoureyPlanner /> */}

            </div>
        );
    }
}

export default Planner;
