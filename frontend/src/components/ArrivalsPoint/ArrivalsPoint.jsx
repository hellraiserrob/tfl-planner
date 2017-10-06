import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { getUrl } from '../../utils/services.js'
import { API_BASE } from '../../constants/endpoints.js'

// import ArrivalResultsItem from './ArrivalResultsItem'
import Loading from '../Common/Loading'

class ArrivalsPoint extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLoading: false,
            isError: false,
            results: {}
        }

        this.getResults = this.getResults.bind(this)

    }

    componentDidMount(){
        this.getResults()
    }


    getResults() {

        const { id } = this.props.match.params

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}Stoppoint/${id}`).then((response) => {

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

        const { isLoading } = this.state

        return (
            <div>

                <Link to="/arrivals/lookup">Back</Link>

                <h4>Point</h4>

                <hr />

                <Loading isLoading={isLoading} />

                {/* {results.length > 0 && results.map((item, index) =>
                    <ArrivalResultsItem {...item} key={index} />
                )} */}

            </div>
        );
    }
}

export default ArrivalsPoint