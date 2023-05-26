import React, { Component } from 'react';
import './Styles/services.css';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal';
import {Link} from 'react-router-dom';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
class Services extends Component {
    state = {
        sticky: true,
    };
    state = {  } 
    handleScroll = () => {
        const questionsSection = document.getElementById('questions');
        const questionsSectionTop = questionsSection.offsetTop;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if (scrollTop >= questionsSectionTop) {
          this.setState({ sticky: false });
        } else {
          this.setState({ sticky: true });
        }
      };
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
    render() { 
        const { activeId, sticky } = this.state;
        return (
            <div id='service-page'>

                <Link 
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/"> <img id='logo' src={logo}/>
                </Link>

                
                <Fade down><div className='heading'>
                    <div>
                        <h1 className='white-txt'>Services</h1>
                        <p  className='white-txt'>See the services we provide. If you're uncertain about our ability to cater to your specific requirements, feel free to reach out to us without hesitation. </p>
                    </div>
                </div></Fade>

                                        

                <div className='service-list white-txt'>
                    <div className='nav col-lg-3'>

                    <ul className={`sticky-element ${sticky ? 'sticky' : ''}`} style={{ listStyle: 'none' }}>
                            <li>
                                <ScrollLink to="hardscapes" smooth={true} duration={500} spy={true}
                                 active={activeId === "hardscapes"}>
                                    Hardscapes
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="outdoor-lighting" smooth={true} duration={500} spy={true}
                                active={activeId === "outdoor-lighting"}>
                                    Outdoor Lighting
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="property-maintenance" smooth={true} duration={500} spy={true}
                                 active={activeId === "property-maintenance"}>
                                    Propery Maintenance
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="landscape-design" smooth={true} duration={500} spy={true}
                                active={activeId === "landscape-design"} >
                                New Landscape Design
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="exterior-drainage" smooth={true} duration={500} spy={true}
                                active={activeId === "exterior-drainage"}>
                                Exterior Drainage
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="outdoor-living-spaces" smooth={true} duration={500} spy={true}
                                 active={activeId === "outdoor-living-spaces"}>
                                Outdoor Living Spaces
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="retaining-walls" smooth={true} duration={500} spy={true}
                                 active={activeId === "retaining-walls"}>
                                Retaining Walls and Patios
                                </ScrollLink>
                            </li>
     
                    
                        </ul>                  
                    </div>
                    <div className='list'>
                        <div id='hardscapes' className='service-item'>
                            <h1>Hardscapes</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                 <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>


                        <div  id='outdoor-lighting' className='service-item'>
                            <h1>Outdoor Lighting</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='property-maintenance' className='service-item'>
                            <h1>Property Maintenance</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div  id='landscape-design' className='service-item'>
                            <h1>New Landscape Designs</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='exterior-drainage' className='service-item'>
                            <h1>Exterior Drainage</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='outdoor-living-spaces'  className='service-item'>
                            <h1>Outdoor Living Spaces</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                 <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>


                        <div id='retaining-walls'  className='service-item'>
                            <h1>Retaining Walls and Patios</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='service-example'>
                                 <Fade right>
                                    <div className='pictureOne col-md-12 col-sm-12'>
                                    </div>
                                </Fade>
                                <Fade right><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>



                    </div>

                </div>
                <div id='questions' className='white-txt'>
                    <h1>Have any questions?</h1>
                    <p>We would love to answer any questions you may have.</p>
                    <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/ContactUs"><button>Contact Us</button>
                    </Link>
                </div>
              
                
            </div>

        );
    }
}
 
export default Services;