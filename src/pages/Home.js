import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import '../styles/home.css'

const Home = ({openLink}) => {

  return (
    <div className='home-container' id='home'>
      {/* <div className='homepage-name'>Hi, my name is</div> */}
      <div className='homepage-dt'>Daniel Tan</div>
      <div className='homepage-title'>
        <span className='fadeInUp'>FULL STACK SOFTWARE ENGINEER</span>
        {/* <span className='blink'> _</span> */}
      </div>
      <div className='contact-box'>
        <div className='contact-button'>
          <span className='fade-up'>Get In Touch</span>
        </div>
      </div>
      <div className='icon-container'>
        <FontAwesomeIcon className='icon-link fadeIn' icon={faGithub} size='2x' style={{ color: "#d8d8d8" }} onClick={() => openLink('https://github.com/dantan510')} />
        <FontAwesomeIcon className='icon-link fadeIn' icon={faLinkedin} size='2x' style={{ color: "#d8d8d8" }} onClick={() => openLink('https://www.linkedin.com/in/danieltan510/')} />
      </div>
    </div>
  )
}

export default Home

