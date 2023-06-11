import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
class PrivacyPolicy extends Component {
    state = {  } 
    render() { 
        return (
            <div id='privacy'>
                 <Link onClick={() => {
                    document.querySelector("html").scrollTo(0,0);
                    }} to="/">
                    <img id='logo' src={logo} alt='Logo' />
                    </Link>
                <div className='container'>
                    <h1>Privacy Policy</h1>
                    <p>At Transformative Lawn and Landscape LLC ("Company"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website.</p>
                    <ol>
                        
                        <li>
                        <h5>Information We Collect:</h5>
                        <ul>
                            <li>When you use our website, we may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you choose to provide.</li>
                            <li>We may also collect certain non-personal information, such as your IP address, browser type, operating system, and the pages you view on our website.</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Use of Information:</h5>
                        <ul>
                            <li>We may use the personal information we collect to respond to your inquiries, provide the services you request, and improve our website's functionality.</li>
                            <li>We may also use your personal information to send you promotional emails or newsletters if you have opted in to receive such communications. You can unsubscribe from these communications at any time.</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Disclosure of Information:</h5>
                        <ul>
                            <li>We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or providing services to you.</li>
                            <li>We may also disclose your personal information if required by law or to protect our rights, property, or safety or the rights, property, or safety of others.</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Cookies and Analytics:</h5>
                        <ul>
                            <li>We may use cookies to enhance your experience on our website. Cookies are small text files that are placed on your computer or mobile device when you visit a website. They help us analyze web traffic, customize website content, and remember your preferences.</li>
                            <li>We may use Google Analytics or other similar tools to collect information about how visitors use our website. This information is used to compile reports and improve our website's performance.</li>
                        </ul>
                        </li>
                        <li>
                        <h5>Third-Party Links:</h5>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of those third-party websites before providing any personal information.</p>
                        </li>
                        <li>
                        <h5>Security:</h5>
                        <p>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage system can be guaranteed to be 100% secure.</p>
                        </li>
                        <li>
                        <h5>Changes to the Privacy Policy:</h5>
                        <p>We may update this Privacy Policy from time to time. The most current version will be posted on our website with the effective date. Your continued use of our website after any changes to the Privacy Policy constitutes your acceptance of the revised terms.</p>
                        </li>
                    </ol>
                    </div>
                    <Footer/>
                            

            </div>

        );
    }
}
 
export default PrivacyPolicy;