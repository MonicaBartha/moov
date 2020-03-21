import React, { Component } from 'react';
import '../App.css';
import DisplayMapClass from './DisplayMapClass'

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <DisplayMapClass />
            </div>
        );
    }
}

export default Home;
