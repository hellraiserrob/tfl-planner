import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
            redirectBack: false,
            redirectFwd: false,

        }

        this.lookup = this.lookup.bind(this)
        this.setFrom = this.setFrom.bind(this)
        this.setTo = this.setTo.bind(this)
        this.checkSet = this.checkSet.bind(this)

    }

    componentDidMount() {

        // const { from, to } = this.props.match.params
        const { from, to } = this.props

        if (from !== '' && to !== '') {
            this.setState({
                from,
                to
            }, this.lookup)
        }
        else {
            this.setState({
                redirectBack: true
            })
        }



    }



    lookup() {


        const { from, to } = this.state

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_JOURNEY}${from}/to/${to}?mode=tube`).then((response) => {

            console.log(response)

            if (response.fromLocationDisambiguation) {
                if (response.fromLocationDisambiguation.matchStatus === 'identified') {
                    this.setFrom(from)
                }
            }

            if (response.toLocationDisambiguation) {
                if (response.toLocationDisambiguation.matchStatus === 'identified') {
                    this.setTo(to)
                }
            }

            if (response.journeys) {
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

    setFrom(fromId) {


        this.setState({
            fromId
        }, this.checkSet)

        
        
    }
    
    setTo(toId) {
        
        this.setState({
            toId
        }, this.checkSet)
        
        
    }

    checkSet() {

        const { fromId, toId } = this.state

        if (fromId && toId) {

            this.setState({
                redirectFwd: true
            })

        }

    }



    render() {

        const { redirectBack, redirectFwd, from, to, lookup, fromId, toId, isLoading } = this.state

        return (
            <div>

                {redirectBack &&
                    <Redirect to={`/planner`} />
                }

                {redirectFwd &&
                    <Redirect to={`/planner/results/${from}/${to}/${fromId}/${toId}`} />
                }


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


            </div>
        );
    }
}

export default JourneyLookup
