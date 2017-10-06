import React, { Component } from 'react';

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_PRICES } from '../../constants/endpoints.js'

import Loading from '../Common/Loading'
import JourneyPricesTicket from './JourneyPricesTicket'

class JourneyResults extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoading: false,
            isError: false,
            results: []
        }

        this.getPrices = this.getPrices.bind(this)

    }

    componentDidMount(){
        
        this.getPrices()
    }


    getPrices() {

        const { from, to } = this.props

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_PRICES}${from}/FareTo/${to}`).then((response) => {

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

        const { isLoading, results } = this.state

        console.log(results)

        return (
            <div>


                <h4>Prices</h4>

                <Loading isLoading={isLoading} />


                {results.length > 0 && results[0].rows[0].ticketsAvailable.map((ticket, index) => 
                    <JourneyPricesTicket {...ticket} key={index} />
                )}






            </div>
        );
    }
}

export default JourneyResults
