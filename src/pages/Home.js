import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import '../styles/home.css'

const Home = () => {

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='home-container'>
      <div className='homepage-name'>DANIEL TAN</div>
      <div className='homepage-title'>
        <span>Full Stack Software Engineer</span>
        <span className='blink'> _</span>
      </div>
      <div className='contact-box'>
        <div className='contact-button'>
          <span>Get In Touch</span>
        </div>
      </div>
      <div className='icon-container'>
        <FontAwesomeIcon className='icon-link' icon={faGithub} size='2x' style={{color: "#afa6c4"}} onClick={() => openLink('https://github.com/dantan510')}/>
        <FontAwesomeIcon className='icon-link' icon={faLinkedin} size='2x' style={{color: "#afa6c4"}} onClick={() => openLink('https://www.linkedin.com/in/danieltan510/')}/>
      </div>
    </div>
  )
}

export default Home