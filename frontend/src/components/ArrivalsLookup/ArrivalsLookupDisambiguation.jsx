import React, { Component } from 'react';

class ArrivalsLookupDisambiguation extends Component {

    render() {

        const { title, matches, set } = this.props

        return (
            <div>

                <h5>{title}</h5>

                {matches.map((option, index) => {
                    return <div key={index}>
                        <a onClick={() => set(option)}>
                            {option.name}
                        </a>
                    </div>
                })}

            </div>
        );
    }
}

export default ArrivalsLookupDisambiguation
