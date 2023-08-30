import React, { Component } from 'react';
import './Homepage/home.css';
import Landing from './Homepage/Landing';
import Service from './Homepage/Service';
import Breath from './Homepage/Breath';
import Video from './Homepage/Video';
import Reviews from './Homepage/Reviews';
import ContactUs from './ContactUs';
import Footer from './Footer';
import logo from '../Assets/logo.png';
import MobileService from './Homepage/MobileService';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div id='homepage'>
                <img className='home-logo' src={logo}/>
                <Landing/>
                <Service/>
                <MobileService/>
                <Breath/>
                <Reviews/>
                <ContactUs/>
            </div>

        );
    }
}
 
export default Homepage;