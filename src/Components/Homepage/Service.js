import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class Service extends Component {
  state = {};

            render() {
                return (
                <div id="service-pitch" className="white-bg">
                        <div>
                        <div className="pitch-container">
                            <Fade duration={1000}>
                            <div className="boxes col-lg-4">
                                <div className="image-box landscape">
                                <h4 className="white-txt">
                                    <b>Beautiful Landscapes</b>
                                </h4>
                                </div>
                            </div>
                            </Fade>
                            <Fade duration={2000}>
                            <div className="boxes col-lg-4">
                                <div className="image-box greenery">
                                <h4 className="white-txt">
                                    <b>Amazing Greenery</b>
                                </h4>
                                </div>
        
                            </div>
                            </Fade>
                            <Fade duration={3000}>
                            <div className="boxes col-lg-4">
                                <div className="image-box hardscape">
                                <h4 className="white-txt">
                                    <b>Stunning Hardscapes</b>
                                </h4>
                                </div>
                                
                            </div>
                            </Fade>
                        </div>
                        <h2 className='amazing-service col-lg-10' style={{textAlign: "center", marginBottom: "30px"}}>We have amazing services to cater to bring you your dream paradise. Our services include: Lawn Maintenance, Retaining
                                Walls, Patios, Landscape Design, Desk Installation, and more.</h2>
                        <div className="button-container">
                        <Link 
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/Services"> <button>See our Services</button>
                        </Link>
                            
                        </div>
                        </div>
                      

                </div>
                );
            }
            }

export default Service;
