import React, { Component } from 'react';
import './Styles/services.css';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
class Services extends Component {
    state = {
        sticky: true,
    };
    state = {  } 
    handleScroll = () => {
        const questionsSection = document.getElementById('questions');
        const questionsSectionTop = questionsSection.offsetTop;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if (scrollTop >= questionsSectionTop) {
          this.setState({ sticky: false });
        } else {
          this.setState({ sticky: true });
        }
      };
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
    render() { 
        const { activeId, sticky } = this.state;
        return (
            <div id='service-page'>
               <div>
                <Link 
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/"> <img id='logo' src={logo}/>
                </Link>

                
                <Fade down><div className='heading'>
                    <div>
                        <h1 className='white-txt'>Services</h1>
                        <p  className='white-txt'>See the services we provide. If you're uncertain about our ability to cater to your specific requirements, feel free to reach out to us without hesitation. </p>
                    </div>
                </div></Fade>

                                        

                <div className='service-list white-txt'>
                    <div className='nav col-lg-3'>

                    <ul className={`sticky-element ${sticky ? 'sticky' : ''}`} style={{ listStyle: 'none' }}>
                            <li>
                                <ScrollLink to="hardscapes" smooth={true} duration={500} spy={true}
                                 active={activeId === "hardscapes"}>
                                    Hardscapes
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="outdoor-lighting" smooth={true} duration={500} spy={true}
                                active={activeId === "outdoor-lighting"}>
                                    Outdoor Lighting
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="property-maintenance" smooth={true} duration={500} spy={true}
                                 active={activeId === "property-maintenance"}>
                                    Property Maintenance
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="landscape-design" smooth={true} duration={500} spy={true}
                                active={activeId === "landscape-design"} >
                                New Landscape Design
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="exterior-drainage" smooth={true} duration={500} spy={true}
                                active={activeId === "exterior-drainage"}>
                                Exterior Drainage
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="outdoor-living-spaces" smooth={true} duration={500} spy={true}
                                 active={activeId === "outdoor-living-spaces"}>
                                Outdoor Living Spaces
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="retaining-walls" smooth={true} duration={500} spy={true}
                                 active={activeId === "retaining-walls"}>
                                Retaining Walls and Patios
                                </ScrollLink>
                            </li>
     
                    
                        </ul>                  
                    </div>
                    <div className='list'>
                        <div id='hardscapes' className='service-item'>
                            <h1>Hardscapes</h1>
                            <p>Enhance the beauty and functionality of your outdoor spaces with our <b>professional hardscaping services</b>. 
                                Our skilled team combines expert craftsmanship with quality materials to create stunning features such as <b>walkways, 
                                driveways, retaining walls, and patios</b>. Whether you're looking to add a touch of elegance or create a functional outdoor
                                living area, our hardscaping solutions will <b>transform your property into a masterpiece</b>.</p>
                            <div className='service-example'>
                                 <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>


                        <div  id='outdoor-lighting' className='service-item'>
                            <h1>Outdoor Lighting</h1>
                            <p>Illuminate your landscape and create an inviting ambiance with our <b>exceptional outdoor lighting services</b>. 
                                Our team of experts will design and <b>install custom lighting solutions</b> that accentuate the beauty of your property, 
                                <b>enhance security</b>, and <b>extend your outdoor living hours</b>. From <b>elegant pathway lighting</b> to <b>mesmerizing garden features</b>,
                                 we use energy-efficient and durable lighting fixtures to create a captivating and safe environment for you to enjoy day 
                                 and night.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='property-maintenance' className='service-item'>
                            <h1>Property Maintenance</h1>
                            <p>Ensure your property maintains its pristine appearance year-round with our <b>comprehensive property maintenance services</b>. 
                            We offer <b>regular lawn care, trimming, pruning, fertilization, weed control, and seasonal cleanups</b> to keep your landscape 
                            healthy and beautiful. Our skilled team is dedicated to providing meticulous attention to detail and maintaining the highest 
                            standards of professionalism, so you can relax and enjoy a well-maintained property without any hassle.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div  id='landscape-design' className='service-item'>
                            <h1>New Landscape Designs</h1>
                            <p>Experience the transformation of your outdoor space with our <b>innovative new landscape design services</b>. 
                                Our team of talented designers will work closely with you to create a <b>unique</b> and <b>personalized landscape </b> 
                                that reflects your vision and preferences. From selecting the <b>perfect plants</b> and trees to incorporating elements 
                                such as <b>water features and seating areas</b>, our designs will bring harmony and beauty to your property, turning it 
                                into a breathtaking oasis.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='exterior-drainage' className='service-item'>
                            <h1>Exterior Drainage</h1>
                            <p><b>Protect your property</b> from water damage and ensure proper drainage with our reliable <b>exterior drainage solutions</b>. 
                                Our experienced team will <b>assess your landscape, identify problem areas</b>, and implement <b>effective drainage systems</b> to 
                                redirect water away from your property. By addressing issues such as poor soil drainage and grading, we can help <b>prevent 
                                erosion, foundation problems</b>, and other costly water-related issues, keeping your landscape safe and dry.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>

                        <div id='outdoor-living-spaces'  className='service-item'>
                            <h1>Outdoor Living Spaces</h1>
                            <p>Expand your living area and create a <b>seamless indoor-outdoor connection</b> with our exquisite 
                            <b>outdoor living space designs</b>. Whether you desire a <b>cozy patio</b>, a <b>versatile deck</b>, or a <b>fully equipped outdoor kitchen</b>, 
                                our team will bring your vision to life. We integrate functional elements with aesthetically pleasing designs, 
                                using <b>high-quality materials</b> to ensure <b>durability</b> and <b>longevity</b>. Enjoy entertaining guests or relaxing in the open 
                                air with our <b>exceptional outdoor living spaces</b>.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>


                        <div id='retaining-walls'  className='service-item'>
                            <h1>Retaining Walls and Patios</h1>
                            <p>Add structure, functionality, and visual appeal to your landscape with our expertly crafted <b>retaining walls and patios.</b> 
                                Our skilled team will design and construct retaining walls that <b>prevent soil erosion</b>, create <b>multi-level garden areas</b>,
                                 and <b>add dimension to your property</b>. We also specialize in <b>patio installations</b>, creating inviting spaces where you can 
                                 entertain, relax, and enjoy the beauty of the outdoors. With a focus on quality craftsmanship and attention to detail, 
                                 our retaining walls and patios are built to last.</p>
                            <div className='service-example'>
                                <Fade right duration={1000}>
                                    <div className='pictureOne'>
                                    </div>
                                </Fade>
                                <Fade right delay={100}><div  className='picture d-lg-block d-none'>
                                </div></Fade>
                            </div>
                        </div>



                    </div>

                </div>
                <div id='questions' className='white-txt'>
                    <h1>Have any questions?</h1>
                    <p>We would love to answer any questions you may have.</p>
                    <Link className='link-btn'
                            onClick={() => {
                                        document.querySelector("html").scrollTo(0,0);
                                        }}
                            to = "/ContactUs"><button>Contact Us</button>
                    </Link>
                </div>
                </div>
                <Footer/>
                
            </div>

        );
    }
}
 
export default Services;