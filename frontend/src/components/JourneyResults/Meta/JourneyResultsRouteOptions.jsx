import React, { Component } from 'react';


import './JourneyResultsRouteOptions.css'

class JourneyResultsRouteOptions extends Component {


    render() {

        const { options } = this.props

        // console.log(options)

        return (

            <div className="journeyResultsRouteOptions">


                
                    {options.map((option, index) => {

                        const lineStyle = {
                            left: index * 3
                        }

                        let lineClass = ''

                        if(option.lineIdentifier){
                            lineClass = option.lineIdentifier.id
                        }

                        return <div key={index} style={lineStyle} className={`line ${lineClass}`}>{option.name}</div>
                    })}
                


                {this.props.children}

            </div>
        );
    }
}

export default JourneyResultsRouteOptions