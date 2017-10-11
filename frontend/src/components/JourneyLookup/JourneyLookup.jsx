import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_JOURNEY } from '../../constants/endpoints.js'

import JourneyLookupDisambiguation from './JourneyLookupDisambiguation'
import Loading from '../Common/Loading'

class JourneyLookup extends Component {

    constructor(props) {

        super(props)

        this.state = {
            from: '',
            fromId: null,
            to: '',
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

    componentDidMount(){
        
        const { from, to } = this.props.match.params

        
        if(typeof from !== 'undefined' && typeof to !== 'undefined'){
            this.setState({
                from,
                to
            }, this.lookup)
        }
        



    }



    lookup() {

        const { from, to } = this.state

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_JOURNEY}${from}/to/${to}?mode=tube`).then((response) => {

            console.log(response)

            if(response.fromLocationDisambiguation){
                if(response.fromLocationDisambiguation.matchStatus === 'identified'){
                    this.setFrom(from)
                }
            }
            
            if(response.toLocationDisambiguation){
                if(response.toLocationDisambiguation.matchStatus === 'identified'){
                    this.setTo(to)
                }
            }
            
            if(response.journeys){
                this.setFrom(from)
                this.setTo(to)
            }


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

                <div className="mb50">

                    <div className="grid">
                        <div className="unit half">

                            <label htmlFor="from">from</label>
                            <input className="form-field" name="from" id="from" type="text" value={from} onChange={this.handleFromChange} placeholder="From" />

                        </div>

                        <div className="unit half">

                            <label htmlFor="to">to</label>
                            <input className="form-field" name="to" id="to" type="text" value={to} onChange={this.handleToChange} placeholder="To" />

                        </div>

                    </div>

                </div>


                <div className="mb50">

                    <button onClick={this.lookup} className="btn">Search</button>

                </div>

                <Loading isLoading={isLoading} />

                <div className="grid">

                    <div className="unit half">

                        {lookup.fromLocationDisambiguation &&
                            <JourneyLookupDisambiguation title="From" {...lookup.fromLocationDisambiguation} set={this.setFrom} value={from} active={fromId} />
                        }

                    </div>

                    <div className="unit half">

                        {lookup.toLocationDisambiguation &&
                            <JourneyLookupDisambiguation title="To" {...lookup.toLocationDisambiguation} set={this.setTo} value={to} active={toId} />
                        }

                    </div>

                </div>

                {fromId && toId &&
                    <Link to={`/planner/results/${from}/${to}/${fromId}/${toId}`} className="btn">Results</Link>
                }

            </div>
        );
    }
}

export default JourneyLookup
