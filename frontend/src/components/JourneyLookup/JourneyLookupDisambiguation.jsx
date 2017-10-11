import React, { Component } from 'react';
import classNames from 'classnames'

import './JourneyLookupDisambiguation.css'

class JourneyLookupDisambiguation extends Component {

    render() {

        const { title, disambiguationOptions, set, matchStatus, value, active } = this.props

        const matched = matchStatus === 'identified' ? true : false
        const notIdentified = matchStatus === 'notidentified' ? true : false

        return (
            <div className="fadeIn">


                <h4>Select {title}</h4>

                <ul className="journeyLookupDisambiguation mb50">
                    {disambiguationOptions && disambiguationOptions.map((option, index) => {

                        const optionClass = classNames({
                            active: active === option.parameterValue ? true : false
                        })

                        return <li key={index}>
                            <a onClick={() => set(option.parameterValue)} className={optionClass}>
                                {option.place.commonName}
                            </a>
                        </li>
                    })}

                    {matched &&
                        <li>
                            <a onClick={() => set(value)} className="active">
                                {value}
                            </a>
                        </li>
                    }


                    {notIdentified &&
                        <li>
                            No match was found
                        </li>
                    }

                </ul>




            </div>
        );
    }
}

export default JourneyLookupDisambiguation
