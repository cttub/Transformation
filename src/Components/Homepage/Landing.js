import React, { Component } from 'react';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing'>

                <div className='col-lg-8'>
                    <h2 className='white-txt'>Our Caring Team delivers</h2>
                    <h1 className='white-txt'>Transformative Landscaping and Lawn Services</h1>
                    <button>Get a Quote</button>
                </div>
                <a href="tel:+4178444570" className='white-txt'>Call Us (417) 844-4570</a>

            </div>

        );
    }
}
 
export default Landing;