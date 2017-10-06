import React, { Component } from 'react';

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_JOURNEY } from '../../constants/endpoints.js'

import JourneyPlannerDisambiguation from './JourneyPlannerDisambiguation'
import JourneyPlannerResults from './JourneyPlannerResults'

class JourneyPlanner extends Component {

    constructor(props) {

        super(props)

        this.state = {
            from: 'Bank',
            fromId: null,
            to: 'Paddington',
            toId: null,
            isLoading: false,
            isError: false,
            lookup: {},
            results: {}
        }

        this.lookup = this.lookup.bind(this)
        this.search = this.search.bind(this)
        this.setFrom = this.setFrom.bind(this)
        this.setTo = this.setTo.bind(this)

        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleToChange = this.handleToChange.bind(this)
    }



    lookup() {

        const { from, to } = this.state

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_JOURNEY}${from}/to/${to}`).then((response) => {

            console.log(response)

            this.setState({
                lookup: response,
                isLoading: false,
                isError: false
            })

        }).catch((error) => {

            console.log(error)

            this.setState({
                isLoading: false,
                isError: true
            })

        })

    }


    handleFromChange(event) {
        this.setState({
            from: event.target.value
        })
    }

    handleToChange(event) {
        this.setState({
            to: event.target.value
        })
    }

    setFrom(location) {
        
        const fromId = location.parameterValue

        this.setState({
            fromId
        }, this.search)

        

    }

    setTo(location) {
        
        const toId = location.parameterValue

        this.setState({
            toId
        }, this.search)

        // this.search()
    }


    search() {

        const { fromId, toId } = this.state

        // console.log(`from: ${fromId}, to: ${toId}`)

        if(fromId && toId){

            // console.log('search')

            this.setState({
                isLoading: true
            })
    
            getUrl(`${API_BASE}${API_JOURNEY}${fromId}/to/${toId}`).then((response) => {
    
                console.log(response)
    
                this.setState({
                    results: response,
                    isLoading: false,
                    isError: false
                })
    
            }).catch((error) => {
    
                console.log(error)
    
                this.setState({
                    isLoading: false,
                    isError: true
                })
    
            })

        }


    }


    render() {

        const { from, to, lookup, results } = this.state

        return (
            <div>

                <h4>Basics</h4>

                <p>
                    <label htmlFor="from">from</label><br />
                    <input name="from" id="from" type="text" value={from} onChange={this.handleFromChange} placeholder="From" />
                </p>
                <p>
                    <label htmlFor="to">to</label><br />
                    <input name="to" id="to" type="text" value={to} onChange={this.handleToChange} placeholder="To" />
                </p>

                <button onClick={this.lookup}>search</button>

                {/* {lines.map((line, index) => <StatusLine {...line} key={index} />)} */}

                <hr />

                {lookup.fromLocationDisambiguation &&
                    <JourneyPlannerDisambiguation title="From" list={lookup.fromLocationDisambiguation} set={this.setFrom} />
                }


                {lookup.toLocationDisambiguation &&
                    <JourneyPlannerDisambiguation title="To" list={lookup.toLocationDisambiguation} set={this.setTo} />
                }


                {results.journeys &&
                    <JourneyPlannerResults results={results} />
                }


            </div>
        );
    }
}

export default JourneyPlanner
