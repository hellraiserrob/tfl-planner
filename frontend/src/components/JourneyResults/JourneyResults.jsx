import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { getUrl } from '../../utils/services.js'
import { API_BASE, API_JOURNEY } from '../../constants/endpoints.js'


import './JourneyResults.css'

import JourneyResultsRoute from './JourneyResultsRoute'
import Loading from '../Common/Loading'

class JourneyResults extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoading: false,
            isError: false,
            results: {}
        }

        this.getResults = this.getResults.bind(this)

    }

    componentDidMount() {
        this.getResults()
    }


    getResults() {

        const { fromId, toId } = this.props.match.params

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

    render() {

        const { results, isLoading } = this.state

        const { from, to } = this.props.match.params

        return (
            <div>

                <Loading isLoading={isLoading} />

                <div className="mb50">

                    <Link to={`/planner/lookup/${from}/${to}`} className="btn">Back</Link>

                </div>

                <div className="journeyResults">
                    {results.journeys && results.journeys.map((journey, index) =>
                        <JourneyResultsRoute {...journey} key={index} />
                    )}
                </div>


            </div>
        );
    }
}

export default JourneyResults
