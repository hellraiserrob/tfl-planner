import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_JOURNEY } from '../../constants/endpoints.js'

import JourneyLookupDisambiguation from './JourneyLookupDisambiguation'
import Loading from '../Common/Loading'

class JourneyLookup extends Component {

    constructor(props) {

        super(props)

        this.state = {
            from: 'London Liverpool Street',
            fromId: null,
            to: 'Paddington',
            toId: null,
            isLoading: false,
            isError: false,
            lookup: {},

        }

        this.lookup = this.lookup.bind(this)
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

        getUrl(`${API_BASE}${API_JOURNEY}${from}/to/${to}?mode=tube`).then((response) => {

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

    setFrom(fromId) {

        this.setState({
            fromId
        })

    }

    setTo(toId) {

        this.setState({
            toId
        })

    }



    render() {

        const { from, to, lookup, fromId, toId, isLoading } = this.state

        return (
            <div>

                <h4>Lookup</h4>

                <p>
                    <label htmlFor="from">from</label><br />
                    <input name="from" id="from" type="text" value={from} onChange={this.handleFromChange} placeholder="From" />
                </p>
                <p>
                    <label htmlFor="to">to</label><br />
                    <input name="to" id="to" type="text" value={to} onChange={this.handleToChange} placeholder="To" />
                </p>

                <button onClick={this.lookup}>search</button>

                <hr />

                <Loading isLoading={isLoading} />

                {lookup.fromLocationDisambiguation &&
                    <JourneyLookupDisambiguation title="From" {...lookup.fromLocationDisambiguation} set={this.setFrom} value={from} />
                }


                {lookup.toLocationDisambiguation &&
                    <JourneyLookupDisambiguation title="To" {...lookup.toLocationDisambiguation} set={this.setTo} value={to} />
                }

                {fromId && toId &&
                    <Link to={`/planner/results/${fromId}/${toId}`}>Results</Link>
                }

            </div>
        );
    }
}

export default JourneyLookup
