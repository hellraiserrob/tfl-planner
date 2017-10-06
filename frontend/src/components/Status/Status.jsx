import React, { Component } from 'react';

import StatusLine from './StatusLine'

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_STATUS } from '../../constants/endpoints.js'

class Status extends Component {

    constructor(props){
        super(props)

        this.state = {
            lines: [],
            isLoading: false,
            isError: false,

        }

        this.refresh = this.refresh.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    refresh() {

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_STATUS}`).then((response) => {

            console.log(response)

            this.setState({
                lines: response,
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

        const { lines } = this.state

        return (
            <div>
                <h3>Status</h3>
                <button onClick={this.refresh}>refresh</button>
                {lines.map((line, index) => <StatusLine {...line} key={index} />)}
            </div>
        );
    }
}

export default Status;
