import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


import JourneyLookup from '../JourneyLookup/JourneyLookup'
import JourneyResults from '../JourneyResults/JourneyResults'
// import JoureyPlanner from '../JourneyPlanner/JourneyPlanner'

class Planner extends Component {

    constructor(props) {

        super(props)

        this.state = {
            from: '',
            to: '',
        }

        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleToChange = this.handleToChange.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount(){

        const { from, to } = this.props.match.params

        if(typeof from !== 'undefined' && typeof to !== 'undefined'){
            this.setState({
                from,
                to
            })
        }


        this.from.focus()
    }

    handleFromChange(event) {
        this.setState({
            from: event.target.value
        })
    }

    handleToChange(event) {
        this.setState({
            to: event.target.value
        })
    }

    update(from, to){
        this.setState({from,to})
    }


    render() {

        const { from, to } = this.state

        return (
            <div>
                <h1 className="">Journey Planner</h1>

                <div className="mb50">

                    <div className="grid">
                        <div className="unit half">

                            <label htmlFor="from">from</label>
                            <input ref={(from) => { this.from = from }} className="form-field" name="from" id="from" type="text" value={from} onChange={this.handleFromChange} placeholder="From" />

                        </div>

                        <div className="unit half">

                            <label htmlFor="to">to</label>
                            <input className="form-field" name="to" id="to" type="text" value={to} onChange={this.handleToChange} placeholder="To" />

                        </div>

                    </div>

                </div>


                <div className="mb50">

                    <Link to={`/planner/lookup`} className="btn" disabled={from === '' || to === ''}>Search</Link>

                </div>


                {/* <hr /> */}

                <Route path="/planner/lookup" render={props => (<JourneyLookup from={from} to={to} />)} />
            
                <Route path="/planner/results/:from/:to/:fromId/:toId" render={props => (<JourneyResults {...props} update={this.update} />)} />

                {/* <JoureyPlanner /> */}

            </div>
        );
    }
}

export default Planner;
