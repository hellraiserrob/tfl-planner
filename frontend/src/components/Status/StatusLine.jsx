import React, { Component } from 'react';
import classNames from 'classnames'

import StatusLineIssue from './StatusLineIssue'

import './StatusLine.css'


class StatusLine extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this)
        this.countIssues = this.countIssues.bind(this)
    }

    toggle() {

        const { isOpen } = this.state

        this.setState({
            isOpen: !isOpen
        })

    }


    countIssues(lineStatuses) {


        let total = 0

        lineStatuses.forEach(issue => {

            if (issue.statusSeverityDescription !== 'Good Service') {
                total += 1
            }

        })


        return total

    }


    render() {

        const { name, lineStatuses, id } = this.props
        const { isOpen } = this.state

        const issues = this.countIssues(lineStatuses)

        const statusClass = classNames({
            statusLine: true,
            issues: issues > 0 ? true: false
        })
        
        const nameClass = classNames({
            
            name: true
        })

        return (
            <div className={`${statusClass} ${id}`}>

                {issues > 0 &&
                    <a onClick={this.toggle} className="toggle">
                        {!isOpen && <i className="material-icons">&#xE5CF;</i>} 
                        {isOpen && <i className="material-icons">&#xE5CE;</i>} 
                    </a>
                }

                <div className="marker"></div>

                <div className={nameClass}>
                    {name}
                </div>

                {isOpen && lineStatuses.map((state, index) =>
                    <StatusLineIssue {...state} key={index} />
                )}

            </div>
        );
    }
}

export default StatusLine;
