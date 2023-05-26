import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Breath extends Component {
    state = {  } 
    render() { 
        return (
            <div id='breathtaking'>

                <div className='inner-container'>

                    <div className='comparision col-lg-5 white-txt'>
                        <div className='container'>
                            <div className='after compare'><p className='after-txt'>After</p><p className='before-txt'>Before</p></div>
                            <div className='before compare'></div>
                        </div>
                    </div>
                    <div className='txt white-txt'>
                        <h1>Our Transformations are Breathtaking</h1>
                        <p>Our services are designed to turn homes into a living paradise that leave our clients in awe. Check out our gallery filled with stunning before and after pictures of our work to see the transformation for yourself.</p>
                        <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/Gallery"><button>View Gallery</button>
                        </Link>
                    </div>

                </div>

            </div>

        );
    }
}
 
export default Breath;