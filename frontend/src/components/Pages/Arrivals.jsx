import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ArrivalsLookup from '../ArrivalsLookup/ArrivalsLookup'
import ArrivalsPoint from '../ArrivalsPoint/ArrivalsPoint'
import ArrivalsResults from '../ArrivalsResults/ArrivalsResults'


class Planner extends Component {

    render() {

        

        return (
            <div>
                <h3>arrivals</h3>

                <Route path="/arrivals/lookup" component={ArrivalsLookup} /> 
                <Route path="/arrivals/point/:id" component={ArrivalsPoint} /> 
                <Route path="/arrivals/results/:id" component={ArrivalsResults} /> 

                {/* <JoureyPlanner /> */}

            </div>
        );
    }
}

export default Planner;
