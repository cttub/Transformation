import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

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
                            <p>
                            We specialize in providing exceptional landscape design.
                            Services include: Landscape Design, Patios, Outdoor Lighting,
                            Property Maintenance, and more.
                            </p>
                        </div>
                        </Fade>
                        <Fade duration={2000}>
                        <div className="boxes col-lg-4">
                            <div className="image-box greenery">
                            <h4 className="white-txt">
                                <b>Amazing Greenery</b>
                            </h4>
                            </div>
                            <p>
                            Give your home a scenic view with our lawn specialization. We
                            have services that involve: Lawn Maintenance, Garden
                            Installation, Trimming Services, and more.
                            </p>
                        </div>
                        </Fade>
                        <Fade duration={3000}>
                        <div className="boxes col-lg-4">
                            <div className="image-box hardscape">
                            <h4 className="white-txt">
                                <b>Stunning Hardscapes</b>
                            </h4>
                            </div>
                            <p>
                            Let us install beautiful hardscapes to enhance your living
                            space. Our services offer: Fountain Installation, Retaining
                            Walls, Patios or Desk Installation, and more.
                            </p>
                        </div>
                        </Fade>
                    </div>
                    <h2 className='amazing-service' style={{textAlign: "center", marginBottom: "30px"}}>We have amazing services to cater to bring you your dream paradise. Our services include: Lawn Maintenance, Retaining
                            Walls, Patios, Landscape Design, Desk Installation, and more.</h2>
                    <div className="button-container">
                       
                        <button>See our Services</button>
                    </div>
                    </div>
                </div>
                );
            }
            }

export default Service;
