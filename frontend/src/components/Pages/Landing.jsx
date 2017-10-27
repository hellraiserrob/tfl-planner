import React, { Component } from 'react';
import Status from '../Status/Status'

class Landing extends Component {

    componentDidMount(){
        // console.log('mounted')
        this.props.pause()
    }
    
    componentWillUnmount(){
        // console.log('unmounted')
        this.props.play()
    }

    render() {

        const { status, refresh, updated } = this.props

        return (
            <div>
                
                <Status status={status} refresh={refresh} updated={updated} />
            </div>
        );
    }
}

export default Landing;
