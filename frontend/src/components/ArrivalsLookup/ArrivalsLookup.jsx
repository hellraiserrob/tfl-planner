import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_POINTS } from '../../constants/endpoints.js'

import ArrivalsLookupDisambiguation from './ArrivalsLookupDisambiguation'
import Loading from '../Common/Loading'

class ArrivalsLookup extends Component {

    constructor(props) {

        super(props)

        this.state = {
            query: 'bank',
            isLoading: false,
            isError: false,
            lookup: {},
            id: null

        }

        this.lookup = this.lookup.bind(this)
        this.setPoint = this.setPoint.bind(this)
        

        this.handleChange = this.handleChange.bind(this)
        
    }



    lookup() {

        const { query } = this.state

        console.log(query)

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_POINTS}${query}`).then((response) => {

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



    handleChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    setPoint(location) {

        const { id } = location

        this.setState({
            id
        })

    }

    
    render() {

        const { query, lookup, id, isLoading } = this.state

        return (
            <div>

                <h4>Lookup</h4>

                <p>
                    <label htmlFor="query">Name</label><br />
                    <input name="query" id="query" type="text" value={query} onChange={this.handleChange} placeholder="Query" />
                </p>
                
                <button onClick={this.lookup}>Lookup</button>

                <hr />

                <Loading isLoading={isLoading} />

                {lookup.matches &&
                    <ArrivalsLookupDisambiguation title="Stop points" {...lookup} set={this.setPoint} value={query} />
                }

                {id &&
                    <Link to={`/arrivals/stoppoint/${id}`}>Results</Link>
                }

            </div>
        );
    }
}

export default ArrivalsLookup