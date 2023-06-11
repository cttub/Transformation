import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class MobileService extends Component {
    state = {  } 
    render() { 
        return (
            <div id='mobileService'>
                <div>
                    <h1>We have Amazing Services to cater for your dream paradise.</h1>
                    <p style={{marginBottom: "10px"}}>Our services include: Lawn Maintenance, Retaining
                                    Walls, Patios, Landscape Design, Desk Installation, and more.</p>
                    <Fade up duration = {1500}><Link 
                                    onClick={() => {
                                                document.querySelector("html").scrollTo(0,0);
                                                }}
                                    to = "/Services"> <button>See our Services</button>
                </Link></Fade>
               </div>
            </div>

        );
    }
}
 
export default MobileService;