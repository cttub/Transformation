import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing'>

                <div className='col-lg-8'>
                    <h2 className='white-txt'>Our Caring Team delivers</h2>
                    <Fade><h1 className='white-txt'>Transformative Landscaping and Lawn Services</h1></Fade>
                    <button>Get a Quote</button>
                </div>
                

            </div>

        );
    }
}
 
export default Landing;