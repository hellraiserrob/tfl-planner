import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import './App.css';
import './Grid.css';
import './Type.css';
import './Button.css';
import './Helpers.css';


import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Landing from '../Pages/Landing'
import Planner from '../Pages/Planner'
import Arrivals from '../Pages/Arrivals'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />

                    <div className="wrap">
                        <div className="grid">
                            <div className="unit whole">
                                <Route exact path="/" component={Landing} />
                                <Route path="/planner" component={Planner} />
                                <Route path="/arrivals" component={Arrivals} />
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
