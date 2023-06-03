import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navigation'>
                
                <Link 
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/Gallery"><a className='white-txt nav-txt'>Gallery</a>
                </Link>

                <Link 
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/Services"><a className='white-txt nav-txt'>Services</a>
                </Link>
               


                <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/ContactUs"><button>Contact Us</button>
                </Link>
               
                 
            </div>
        );
    }
}
 
export default NavigationBar;