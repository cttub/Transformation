import React, { Component } from 'react';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import './Styles/gallery.css';
class Gallery extends Component {
    state = {  } 
    render() { 
        return (
            <div id='gallery'>
                 <Link 
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/"> <img id='logo' src={logo}/>
                </Link>

                
                <Fade down><div className='heading'>
                    <div>
                        <h1 className='white-txt'>See our Gallery</h1>
                        <p style={{borderTop: "solid white", paddingTop: "10px"}} className='white-txt'>Take a look at the before and after transformation for our clients’ home</p>
                    </div>
                </div></Fade>
                


                <div className='img-container flex hover'>           
                    <div className='img-with-desc img-block'>
                        <div className='gal-img full first'>
                            <p className='white-txt'><b>Hover To See After</b></p>
                        </div>
                        <p className='white-txt'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
                        
                    </div>
                    <div className='img-with-desc hide-img-gal second'>
                        <div className='gal-img full second'>
                            <p className='white-txt'><b>Hover To See After</b></p>
                        </div>
                        <p className='white-txt'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
                    </div>
                </div>   


            
            <div className='container-over'>
                <div className='img-container block over'>
                    <div className='blockOne block'>
                       <Fade left duration ={1500}><div className='gal-img before'>
                            <p className='white-txt' style={{marginLeft:"10px",marginTop:"10px"}}><b>Before</b></p>
                        </div></Fade> 
                        <div className='txt'></div>
                    </div>
                    <div className='blockTwo block'>
                        <div className='txt text-hide'><p className='white-txt'  style={{marginRight: "50px"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p></div>
                        <Fade right duration ={1500}><div className='gal-img after'>
                            <p className='white-txt' style={{marginLeft:"10px",marginTop:"10px"}}><b>After</b></p>
                        </div></Fade>
                    </div>
                </div>
            </div>
            <div className='txt text-show'><p className='white-txt'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p></div>

            <div className='container-over'>
                <div className='img-container block over'>
                    <div className='blockOne block'>
                       <Fade left duration ={1500}><div className='gal-img before'>
                            <p className='white-txt' style={{marginLeft:"10px",marginTop:"10px"}}><b>Before</b></p>
                        </div></Fade> 
                        <div className='txt text-hide'><p className='white-txt' style={{marginRight: "50px"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p></div>
                    </div>
                    <div className='blockTwo block'>
                        <div className='txt'></div>
                        <Fade right duration ={1500}><div className='gal-img after'>
                            <p className='white-txt' style={{marginLeft:"10px",marginTop:"10px"}}><b>After</b></p>
                        </div></Fade>
                    </div>
                </div>
            </div>
            <div className='txt text-show'><p className='white-txt'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p></div>






                                        
            </div>

        );
    }
}
 
export default Gallery;