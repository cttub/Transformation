import React, { Component } from 'react';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import './Styles/gallery.css';
import Footer from './Footer';
class Gallery extends Component {
  state = {};

  render() {
    return (
      <div id='gallery'>
        <div>
        <Link onClick={() => {
          document.querySelector("html").scrollTo(0,0);
        }} to="/">
          <img id='logo' src={logo} alt='Logo' />
        </Link>

        <Fade down>
          <div className='heading'>
            <div>
              <h1 className='white-txt'>See our Gallery</h1>
              <p style={{ borderTop: "solid white", paddingTop: "10px" }} className='white-txt'>
                Take a look at the before and after transformation for our clients’ home
              </p>
            </div>
          </div>
        </Fade>

       <div className='img-container flex hover'>
          <div className='img-with-desc img-block'>
            <Fade up duration = {1300}><div className='gal-img full first'>
              <p className='white-txt hovertxt'><b>Hover To See After</b></p>
              <p className='white-txt click'><b>Click To See After</b></p>
              <p className='service-label hover'>Hardscape</p>
            </div></Fade>
            <p className='white-txt'><b>
            Witness the transformative power of our hardscape design and services as we revitalize our client's pool area, imbuing it with a sleek and modern aesthetic.</b></p>
          </div>
          <div className='img-with-desc hide-img-gal second'>   
            <Fade up duration = {1300}><div className='gal-img full second'>
              <p className='white-txt'><b>Hover To See After</b></p>
              <p className='service-label hover'>Hardscape</p>
            </div></Fade>
            <p className='white-txt'><b>Create a seamless and elegant walkway for our valued clients and their families, enhancing the accessibility and charm of their homes.</b></p>
          </div>
        </div>

        <div className='container-over'>
          <div className='img-container block over'>
            <div className='blockOne block'>
              <Fade left duration={1500}>
                <div className='gal-img before firstBottom'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>Before</b></p>
                </div>
              </Fade>
              <div className='txt text-hide'><p className='white-txt' style={{ marginRight: "50px" }}><b>Embrace the beauty of nature by adorning our client's expansive yard with carefully selected trees, providing a picturesque and serene atmosphere just beyond their doorstep.</b></p></div>
            </div>
            <div className='blockTwo block'>
              <div className='txt'></div>
              <Fade right duration={1500}>
                <div className='gal-img after secondBottom'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>After</b></p>
                  <p className='service-label block'>Landscape Design</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className='container-over'>
          <div className='img-container block over'>
            <div className='blockOne block'>
              <Fade left duration={1500}>
                <div className='gal-img before firstTop'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>Before</b></p>
                </div>
              </Fade>
              <div className='txt'></div>
            </div>
            <div className='blockTwo block'>
              <div className='txt text-hide'>
                <p className='white-txt' style={{ marginRight: "50px" }}><b>Elevate our client's outdoor experience by replacing their wooden deck with a stunning stone desk, offering them an unparalleled view of their house.</b></p>
              </div>
              <Fade right duration={1500}>
                <div className='gal-img after secondTop'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>After</b></p>
                  <p className='service-label block'>Hardscape</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className='txt text-show'><p className='white-txt'><b>Elevate our client's outdoor experience by replacing their wooden deck with a stunning stone desk, offering them an unparalleled view of their house.</b></p></div>

        
        <div className='txt text-show'><p className='white-txt'><b>Embrace the beauty of nature by adorning our client's expansive yard with carefully selected trees, providing a picturesque and serene atmosphere just beyond their doorstep.</b></p></div>

        <div className='side-by-side first'>
          <Fade left duration={1500}>
            <div className='img-container side before col-lg-4 col-md-5'>
              <p className='white-txt'><b>Before</b></p>
              <p className='service-label side'>Property Maintenance</p>
            </div>
          </Fade>
          
          <p className='txt one col-lg-4 white-txt'><b>Restore safety and convenience to our client's home after a devastating storm by expertly removing fallen trees and debris, ensuring unobstructed access to their walkway and allowing them to navigate their property with peace of mind.</b></p>
          <Fade right duration={1500}>
            <div className='img-container side after col-lg-4 col-md-5'>
              <p className='white-txt'><b>After</b></p>
            </div>
          </Fade>
        </div>
        <p className='txt side col-lg-4 white-txt'><b>Restore safety and convenience to our client's home after a devastating storm by expertly removing fallen trees and debris, ensuring unobstructed access to their walkway and allowing them to navigate their property with peace of mind.</b></p>

        <div className='side-by-side second'>
          <Fade left duration={1500}>
            <div className='img-container side before col-lg-4 col-md-5'>
              <p className='white-txt'><b>Before</b></p>
              <p className='service-label side'>Hardscape</p>
            </div>
          </Fade>
          <p className='txt one col-lg-4 white-txt'><b>Discover the exquisite craftsmanship of our modern white tile walkway, a stunning addition to our client's property that seamlessly integrates with its surroundings.</b></p>
          <Fade right duration={1500}>
            <div className='img-container side after col-lg-4 col-md-5'>
              <p className='white-txt'><b>After</b></p>
            </div>
          </Fade>
        </div>
        <p className='txt side col-lg-4 white-txt'><b>Discover the exquisite craftsmanship of our modern white tile walkway, a stunning addition to our client's property that seamlessly integrates with its surroundings.</b></p>

        <div className='regular first' style={{marginTop: "200px"}}>
          <div>
          <Fade left duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p className='white-txt'><b>Before</b></p>
              <div className='before img'></div>
            </div></Fade>
            <Fade right duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p  className='white-txt'><b>After</b></p>
              <div className='after img'>
                  <p className='service-label side'>Hardscape</p>
              </div>
            </div></Fade>
         </div>
        </div>
        <p className='white-txt' style={{textAlign: "left", paddingTop: "20px", margin: "auto", width: "80%"}}><b>Revamp your backyard into a haven of natural beauty with our meticulously crafted natural stone walkway, designed to enchant and inspire.</b></p>
       
       
        <div className='regular second' style={{marginTop: "200px"}}>
          <div>
            <Fade left duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p className='white-txt'><b>Before</b></p>
              <div className='before img'></div>
            </div></Fade>
            <Fade right duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p  className='white-txt'><b>After</b></p>
              <div className='after img'>
              <p className='service-label side'>Property Maintenance</p>
              </div>
            </div></Fade>
          </div>
        </div>
        <p className='white-txt' style={{textAlign: "left", paddingTop: "20px", margin: "auto", width: "80%"}}><b>Unveil the hidden potential of our client's front yard by expertly clearing away overgrown bushes, revealing a captivating view from their windows that showcases the true essence of their property.</b></p>





        <div style={{paddingBottom: "100px"}} id='facebookLink' className='white-txt'>
          <h1>See more of our work!</h1>
          <p>We post on Facebook on most of our clients' homes. Come check it out!</p>
          <a href='https://www.facebook.com/transformationlawnandlandscapellc' target='_blank' rel='noopener noreferrer'>
            <button>View More</button>
          </a>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Gallery;
