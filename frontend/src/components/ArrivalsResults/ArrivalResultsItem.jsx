import React, { Component } from 'react';


class ArrivalResultsItem extends Component {

    render() {

        const { destinationName, lineName, stationName, timeToStation, platformName } = this.props

        return (
            <div>
                
                <div>{timeToStation} - {stationName} - {destinationName} ({lineName})</div>
                <small>{platformName}</small>

                

                <hr />


            </div>
        );
    }
}

export default ArrivalResultsItem
