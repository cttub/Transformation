import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing'>

                <div className='col-lg-8'>
                    <h2 className='white-txt'>Our Caring Team delivers</h2>
                    <Fade><h1 className='white-txt'>Transformative Landscaping and Lawn Services</h1></Fade>
               
                    <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/ContactUs"><button>Get a Quote</button>
                    </Link>
                </div>
                

            </div>

        );
    }
}
 
export default Landing;