import React, { Component } from 'react';
import './Homepage/home.css';
import Landing from './Homepage/Landing';
import Service from './Homepage/Service';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
                <Landing/>
                <Service/>
            </div>

        );
    }
}
 
export default Homepage;