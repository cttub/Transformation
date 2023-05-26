import React, { Component } from 'react';
import './Homepage/home.css';
import Landing from './Homepage/Landing';
import Service from './Homepage/Service';
import Breath from './Homepage/Breath';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
                <Landing/>
                <Service/>
                <Breath/>
            </div>

        );
    }
}
 
export default Homepage;