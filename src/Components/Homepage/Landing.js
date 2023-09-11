import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import logo from '../../Assets/logo.png';
import divide from '../../Assets/divider.png';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div className='landing-bg'>
            <div id='landing'>
             
                <div className='col-lg-8'>
                    <h2 className='white-txt'>Our Caring Team delivers</h2>
                    <Fade><h1 className='white-txt'>Transformative Landscaping and Lawn Services</h1></Fade>
                    <p className='white-txt'>Discover the captivating allure of a revitalized outdoor environment with Transformative - your ultimate hub for proficient lawn maintenance and breathtaking landscape architecture.</p>
                    <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/ContactUs"><button>Get Your Quote</button>
                    </Link>
                </div>
              

            </div>
                <img className='divide-img'  src={divide}/>
            </div>

        );
    }
}
 
export default Landing;