import React, { Component } from 'react';
import './Homepage/home.css';
import Landing from './Homepage/Landing';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
                <Landing/>
            </div>

        );
    }
}
 
export default Homepage;