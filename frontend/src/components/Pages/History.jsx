import React, { Component } from 'react';


import { getHistory, clearHistory, clearItem } from '../../utils/history'

import HistoryEmpty from '../History/HistoryEmpty'
import HistoryTable from '../History/HistoryTable'



class History extends Component {

    constructor(props){

        super(props)

        this.state = {
            history: []
        }

        this.handleClearAll = this.handleClearAll.bind(this)
        this.handleClear = this.handleClear.bind(this)

    }

    componentDidMount(){

        this.getResults()
        
    }
    
    getResults(){
        
        const history = getHistory()
    
        
        this.setState({
            history
        })
        
        
    }
    

    handleClearAll(e){
        
        e.preventDefault()
        
        clearHistory()
        this.getResults()
        
        
    }
    
    handleClear(e, index){
        
        e.preventDefault()
        
        clearItem(index)
        this.getResults()
        
    }


    render() {

        // const { status, refresh, updated } = this.props

        const { history } = this.state


        // const history = getHistory()

        // console.log(history)

        return (
            <div>
                <h1>History</h1>

                {history.length === 0 &&
                    <HistoryEmpty />
                }

                {history.length > 0 &&
                    <HistoryTable handleClear={this.handleClear} handleClearAll={this.handleClearAll} items={history} />
                }


            </div>
        );
    }
}

export default History;
