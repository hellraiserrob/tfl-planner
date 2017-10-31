import React, { Component } from 'react';

// import { Link } from 'react-router-dom'
import { getUrl } from '../../utils/services.js'
import { API_BASE, API_JOURNEY } from '../../constants/endpoints.js'

import { addHistory } from '../../utils/history'

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

        // console.log(this.props)

        const {from, to} = this.props.match.params

        this.props.update(from, to)

        this.getResults()
    }


    getResults() {

        const { from, to, fromId, toId } = this.props.match.params

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_JOURNEY}${fromId}/to/${toId}`).then((response) => {

            // console.log(response)

            this.setState({
                results: response,
                isLoading: false,
                isError: false
            })


            addHistory({
                from,
                to,
                fromId,
                toId
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

        // const { from, to } = this.props.match.params

        return (
            <div className="fadeIn">

                

                <Loading isLoading={isLoading} />

                {/* {<div className="mb50">

                    <Link to={`/planner/lookup`} className="btn">Back</Link>

                </div>} */}

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
