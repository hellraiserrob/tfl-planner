import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './App.css';
import './Grid.css';
import './Type.css';
import './Button.css';
import './Inputs.css';
import './Animations.css';
import './Helpers.css';

import Header from '../Header/Header'
// import Footer from '../Footer/Footer'

import Landing from '../Pages/Landing'
import Planner from '../Pages/Planner'
import Arrivals from '../Pages/Arrivals'
import History from '../Pages/History'


import { getUrl } from '../../utils/services.js'
import { API_BASE, API_STATUS } from '../../constants/endpoints.js'

import Loading from '../Common/Loading'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: [],
            isLoading: false,
            isError: false,
            updated: null
        }

        this.refresh = this.refresh.bind(this)
        this.tick = this.tick.bind(this)
        this.pause = this.pause.bind(this)
        this.play = this.play.bind(this)
    }

    pause(){
        // console.log('pause')
        clearTimeout(this.ticker)
    }

    play(){
        // console.log('play')
        this.refresh()
    }

    componentDidMount() {
        this.refresh()
    }

    tick(){

        this.ticker = setTimeout(() => {
            this.refresh()
            
        }, 10000)

    }

    componentWillUnmount(){
        this.pause()
    }

    refresh() {

        this.setState({
            isLoading: true
        })

        getUrl(`${API_BASE}${API_STATUS}`).then((response) => {

            // console.log('refresh status')

            this.setState({
                status: response,
                isLoading: false,
                isError: false,
                updated: new Date()
            })

            this.tick()

        }).catch((error) => {

            console.log(error)

            this.setState({
                isLoading: false,
                isError: true
            })

        })

    }

    countIssues(status) {

        let total = 0

        status.forEach(line => {

            let hasIssues = false;

            line.lineStatuses.forEach(issue => {
                if (issue.statusSeverityDescription !== 'Good Service') {
                    hasIssues = true
                }
            })

            if (hasIssues) {
                total += 1

            }

        })

        this.setFavicon(total)

        return total

    }

    setFavicon(total) {


        let link = document.createElement('link'),
            oldLink = document.getElementById('dynamic-favicon')

        link.id = 'dynamic-favicon'
        link.rel = 'shortcut icon'
        link.href = total > 0 ? '/favicon-alert.ico' : '/favicon.ico'

        if (oldLink) {
            document.head.removeChild(oldLink)
        }

        document.head.appendChild(link)

    }


    render() {

        const { status, isLoading, updated } = this.state

        const issues = this.countIssues(status)

      


        return (
            <Router>
                <div className="app">

                    <Loading isLoading={isLoading} />

                    <Header issues={issues} />

                    <div className="wrap">
                        <div className="grid">
                            <div className="unit whole">

                                <Route exact path="/" render={props => (<Landing status={status} refresh={this.refresh} updated={updated} pause={this.pause} play={this.play} />)} />
                                
                                <Route path="/planner" component={Planner} />
                                <Route path="/history" component={History} />
                                <Route path="/arrivals" component={Arrivals} />
                            </div>
                        </div>
                    </div>

                    {/* <Footer /> */}

                </div>
            </Router>
        );
    }
}

export default App;
