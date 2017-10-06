import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './App.css';
import './Grid.css';
import './Type.css';


import Header from '../Header/Header'

import Landing from '../Pages/Landing'
import Planner from '../Pages/Planner'
import Arrivals from '../Pages/Arrivals'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/planner" component={Planner} />
                    <Route path="/arrivals" component={Arrivals} />
                </div>
            </Router>
        );
    }
}

export default App;
