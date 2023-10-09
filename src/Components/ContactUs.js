import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import Footer from './Footer';
import fade from '../Assets/fade.png';
class ContactUs extends Component {
    componentDidMount() {
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLScoGtyqstfrODC3btcswGqqCChwt0ivCXwpKpM_9o4PXHyOlQ/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className='contact-bg'>
                
                <div id='contact'>
                    
                    <div>
                        <Link onClick={() => {
                        document.querySelector("html").scrollTo(0,0);
                        }} to="/">
                        <img id='logo' src={logo} alt='Logo' />
                        </Link>
                        <div id="ff-compose" className='col-lg-5'></div>
                    </div>
                    <Footer/>
                        
                </div>
            </div>
        );
    }
}

export default ContactUs;
