import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './HistoryTable.css'

class HistoryTable extends Component {


    render() {

        const { handleClear, handleClearAll, items } = this.props

        return (
            <div>
                <table className="historyTable">

                    <thead>
                        <tr>
                            <th>From</th>

                            <th>To</th>
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>

                        {items.map((item, index) => {
                            return <tr key={index}>
                                <td>
                                    {item.from}
                            </td>

                                <td>
                                    {item.to}
                            </td>
                                <td className="text-right">
                                    
                                    <Link to={`/planner/results/${item.from}/${item.to}/${item.fromId}/${item.toId}`}>
                                        {/* <i className="material-icons">&#xE5CD;</i> */}
                                        <i className="material-icons">&#xE52E;</i>
                                    </Link>

                                    <a onClick={(e) => { handleClear(e, index) }} className="clear">
                                        {/* <i className="material-icons">&#xE5CD;</i> */}
                                        <i className="material-icons">&#xE5C9;</i>
                                    </a>
                                </td>

                            </tr>
                        })}




                    </tbody>

                </table>

                <button className="btn" onClick={handleClearAll}>
                    Clear all
                </button>

            </div>
        );
    }
}

export default HistoryTable;
