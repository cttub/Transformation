import React, { Component } from 'react';
import './Homepage/home.css';
import Landing from './Homepage/Landing';
import Service from './Homepage/Service';
import Breath from './Homepage/Breath';
import Video from './Homepage/Video';
import Reviews from './Homepage/Reviews';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
                <Landing/>
                <Service/>
                <Breath/>
                <Video/>
                <Reviews/>
            </div>

        );
    }
}
 
export default Homepage;