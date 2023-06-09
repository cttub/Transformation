import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Hamburger extends Component {
  toggleMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    if (hamburgerMenu.classList.contains('hide')) {
      hamburgerMenu.classList.remove('hide');
      hamburgerMenu.classList.add('show');
      hamburgerBtn.classList.remove('show');
      hamburgerBtn.classList.add('hide');
      //hide the button
    } else if (hamburgerMenu.classList.contains('show')) {
      hamburgerMenu.classList.remove('show');
      hamburgerMenu.classList.add('hide');
      hamburgerBtn.classList.remove('hide');
      hamburgerBtn.classList.add('show');
    }
  }

  render() {
    return (
      <div className='hamburger-nav'>
        <FontAwesomeIcon icon={faBars} id='hamburger-btn' onClick={this.toggleMenu} className= 'hamburger-icon'  />
        <Fade down>
          <div id='hamburger-menu' className='hide'>
                        <div className='hamburger-links'>
                        <Link
                            onClick={() => {
                            document.querySelector('html').scrollTo(0, 0);
                            this.toggleMenu();
                            }}
                            to='/'
                        >
                            <a className='white-txt'>
                            <h1>Home</h1>
                            </a>
                        </Link>
                        <Link
                            onClick={() => {
                            document.querySelector('html').scrollTo(0, 0);
                            this.toggleMenu();
                            }}
                            to='/Gallery'
                        >
                            <a className='white-txt'>
                            <h1>Gallery</h1>
                            </a>
                        </Link>
                        <Link
                            onClick={() => {
                            document.querySelector('html').scrollTo(0, 0);
                            this.toggleMenu();
                            }}
                            to='/Services'
                        >
                            <a className='white-txt'>
                            <h1>Services</h1>
                            </a>
                        </Link>
                        <Link
                            onClick={() => {
                            document.querySelector('html').scrollTo(0, 0);
                            this.toggleMenu();
                            }}
                            to='/ContactUs'
                        >
                            <a className='white-txt'>
                            <h1>Contact</h1>
                            </a>
                        </Link>
                        </div>
                        <a onClick={this.toggleMenu} className='white-txt x-btn'>X</a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Hamburger;
