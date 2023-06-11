import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
class TermsOfUse extends Component {
    state = {  } 
    render() { 
        return (
            <div id='terms'>
                <Link onClick={() => {
                    document.querySelector("html").scrollTo(0,0);
                    }} to="/">
                    <img id='logo' src={logo} alt='Logo' />
                    </Link>
                <div className='container'>
                    <h1>Terms of Use</h1>
                    <p>Welcome to the website of Transformative Lawn and Landscape LLC ("Company"). By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.</p>
                    <ol>
                        <li>
                        <h5>Intellectual Property Rights:</h5>
                        <ul>
                            <li>
                            Unless otherwise stated, the Company and/or its licensors own the intellectual property rights in the website and its contents, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software.
                            </li>
                            <li>
                            You may view, download, and print pages from the website for your personal use, subject to the restrictions set out below and elsewhere in these terms of use.
                            </li>
                            <li>
                            You must not:
                            <ul>
                                <li>Republish material from this website.</li>
                                <li>Sell, rent, or sub-license material from this website.</li>
                                <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for a commercial purpose.</li>
                                <li>Redistribute material from this website except for content specifically and expressly made available for redistribution.</li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <h5>Website Usage:</h5>
                        <ul>
                            <li>You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                            <li>You must not use our website in any way which is unlawful, illegal, fraudulent, or harmful.</li>
                            <li>You must not use our website to copy, store, host, transmit, send, use, publish, or distribute any material that consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit, or other malicious computer software.</li>
                            <li>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction, and data harvesting) on or in relation to our website without our express written consent.</li>
                            <li>You must not use our website to transmit or send unsolicited commercial communications.</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Third-Party Resources:</h5>
                        <ul>
                            <li>
                            Our website may contain links to third-party websites or resources for your convenience and information. We do not endorse the content of these third-party websites, and your access to and use of such websites or resources is at your own risk.
                            </li>
                            <li>
                            We are not responsible or liable for any damage or loss caused or alleged to be caused by or in connection with your use of or reliance on any content, goods, or services available on or through any third-party websites or resources.
                            </li>
                        </ul>
                        </li>
                        <li>
                        <h5>Limitation of Liability:</h5>
                        <ul>
                            <li>
                            To the fullest extent permitted by applicable law, the Company, its directors, officers, employees, affiliates, agents, contractors, suppliers, licensors, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website.
                            </li>
                            <li>
                            We make no representations or warranties of any kind, whether express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                            </li>
                        </ul>
                        </li>
                    </ol>
            </div>
            <Footer/>

            </div>
        );
    }
}
 
export default TermsOfUse;