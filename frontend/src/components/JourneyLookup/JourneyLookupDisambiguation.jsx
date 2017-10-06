import React, { Component } from 'react';

class JourneyLookupDisambiguation extends Component {

    render() {

        const { title, disambiguationOptions, set, matchStatus, value } = this.props

        const matched = matchStatus === 'identified' ? true : false

        return (
            <div>


                <h5>{title}</h5>

                {disambiguationOptions && disambiguationOptions.map((option, index) => {
                    return <div key={index}>
                        <a onClick={() => set(option.parameterValue)}>
                            {option.place.commonName}
                        </a>
                    </div>
                })}

                {matched &&
                    <a onClick={() => set(value)}>
                        {value}
                    </a>
                }


            </div>
        );
    }
}

export default JourneyLookupDisambiguation
