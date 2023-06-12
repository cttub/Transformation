import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import facebook from '../Assets/facebook.svg';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div id='footer'>
                <div className='info'>
                    <Link style={{color: "white", textTransform: "none"}}
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/"><h5 className='white-txt'>Transformative Lawn and Landscape LLC</h5>
                    </Link>
                    
                    <h5 className='white-txt'>Springfield, MO</h5>
                    <h5 className='white-txt'>www.transformlandmo.com</h5>
                    <a style={{color: "white"}} href='tel:4178444570'>(417) 844-4570</a>
                </div>
                <div className='docu'>
                    <Link style={{color: "white", textTransform: "none"}}
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/TermsOfUse"><h5>Terms Of Use</h5>
                    </Link>
                    <Link style={{color: "white", textTransform: "none"}}
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/PrivacyPolicy"><h5>Privacy Policy</h5>
                    </Link>
                    
                </div>
                <div className='docu'>
                    <a href='https://www.facebook.com/transformationlawnandlandscapellc' target='_blank' className='white-txt' style={{textTransform: "none"}}><img className='facebook' style={{width: "40px"}} src={facebook}/></a>
                </div>
    
              
            </div>

        );
    }
}
 
export default Footer;