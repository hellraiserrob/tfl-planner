import React, { Component } from 'react';

import StatusLine from './StatusLine'

import { getUrl } from '../../utils/services.js'
import { API_BASE, API_STATUS } from '../../constants/endpoints.js'

import Loading from '../Common/Loading'

class Status extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lines: [],
            isLoading: false,
            isError: false,
            updated: null
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
                isError: false,
                updated: new Date()
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

        const { lines, isLoading, updated } = this.state

        return (
            <div>

                <div className="grid">

                    <div className="unit one-third">
                        <h2>Tube, DLR status</h2>
                        <p>
                            To refresh click the button
                        </p>
                        <p>
                            <button className="btn" onClick={this.refresh}>Update</button>
                        </p>
                        {updated &&
                            <small>Updated: {updated.getTime()}</small>
                        }

                    </div>

                    <div className="unit two-thirds">

                        <Loading isLoading={isLoading} />

                        {lines.map((line, index) => <StatusLine {...line} key={index} />)}

                    </div>

                </div>

            </div>
        );
    }
}

export default Status;
