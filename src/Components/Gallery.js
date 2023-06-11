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
              <p className='white-txt'><b>Hover To See After</b></p>
            </div></Fade>
            <p className='white-txt'><b>This is a description for the <u>hover first</u> image and it's contents that go along with it to describe the work involved.</b></p>
          </div>
          <div className='img-with-desc hide-img-gal second'>
            <Fade up duration = {1300}><div className='gal-img full second'>
              <p className='white-txt'><b>Hover To See After</b></p>
            </div></Fade>
            <p className='white-txt'><b>This is a description for the <u>hover second</u> image and it's contents that go along with it to describe the work involved.</b></p>
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
                <p className='white-txt' style={{ marginRight: "50px" }}><b>This is a description for the <u>over first</u> image and it's contents that go along with it to describe the work involved.</b></p>
              </div>
              <Fade right duration={1500}>
                <div className='gal-img after secondTop'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>After</b></p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className='txt text-show'><p className='white-txt'><b>This is a description for the <u>over first</u> image and it's contents that go along with it to describe the work involved.</b></p></div>

        <div className='container-over'>
          <div className='img-container block over'>
            <div className='blockOne block'>
              <Fade left duration={1500}>
                <div className='gal-img before firstBottom'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>Before</b></p>
                </div>
              </Fade>
              <div className='txt text-hide'><p className='white-txt' style={{ marginRight: "50px" }}><b>This is a description for the <u>hover second</u> image and it's contents that go along with it to describe the work involved.</b></p></div>
            </div>
            <div className='blockTwo block'>
              <div className='txt'></div>
              <Fade right duration={1500}>
                <div className='gal-img after secondBottom'>
                  <p className='white-txt' style={{ marginLeft: "10px", marginTop: "10px" }}><b>After</b></p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className='txt text-show'><p className='white-txt'><b>This is a description for the <u>over second</u> image and it's contents that go along with it to describe the work involved.</b></p></div>

        <div className='side-by-side first'>
          <Fade left duration={1500}>
            <div className='img-container side before col-lg-4 col-md-5'>
              <p className='white-txt'><b>Before</b></p>
            </div>
          </Fade>
          <p className='txt one col-lg-4 white-txt'><b>This is a description for the <u>side by side first</u> image and it's contents that go along with it to describe the work involved.</b></p>
          <Fade right duration={1500}>
            <div className='img-container side after col-lg-4 col-md-5'>
              <p className='white-txt'><b>After</b></p>
            </div>
          </Fade>
        </div>
        <p className='txt side col-lg-4 white-txt'><b>This is a description for the <u>side by side first</u> image and it's contents that go along with it to describe the work involved.</b></p>

        <div className='side-by-side second'>
          <Fade left duration={1500}>
            <div className='img-container side before col-lg-4 col-md-5'>
              <p className='white-txt'><b>Before</b></p>
            </div>
          </Fade>
          <p className='txt one col-lg-4 white-txt'><b>This is a description for the <u>side by side seocnd</u> image and it's contents that go along with it to describe the work involved.</b></p>
          <Fade right duration={1500}>
            <div className='img-container side after col-lg-4 col-md-5'>
              <p className='white-txt'><b>After</b></p>
            </div>
          </Fade>
        </div>
        <p className='txt side col-lg-4 white-txt'><b>This is a description for the <u>side by side second</u> image and it's contents that go along with it to describe the work involved.</b></p>

        <div className='regular first' style={{marginTop: "200px"}}>
          <div>
          <Fade left duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p className='white-txt'><b>Before</b></p>
              <div className='before img'></div>
            </div></Fade>
            <Fade right duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p  className='white-txt'><b>After</b></p>
              <div className='after img'></div>
            </div></Fade>
         </div>
        </div>
        <p className='white-txt' style={{textAlign: "center", marginTop: "10px"}}><b>This is a description for the <u>normal first</u> image and it's contents that go along with it to describe the work involved.</b></p>
       
       
        <div className='regular second' style={{marginTop: "200px"}}>
          <div>
            <Fade left duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p className='white-txt'><b>Before</b></p>
              <div className='before img'></div>
            </div></Fade>
            <Fade right duration = {1500}><div className='container-img before col-lg-5 col-md-5 col-sm-12'>
              <p  className='white-txt'><b>After</b></p>
              <div className='after img'></div>
            </div></Fade>
          </div>
        </div>
        <p className='white-txt' style={{textAlign: "center", marginTop: "10px"}}><b>This is a description for the <u>normal second</u> image and it's contents that go along with it to describe the work involved.</b></p>





        <div style={{marginBottom: "100px"}} id='facebookLink' className='white-txt'>
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
