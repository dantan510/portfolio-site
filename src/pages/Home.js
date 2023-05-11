import React from 'react';
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='homepage-name'>DANIEL TAN</div>
      <div className='homepage-title'>
        <span>Full Stack Software Engineer</span>
        <span className='blink'> _</span>
      </div>
      <div className='contact-box'>
        <div className='contact-button'>
          <span >Get In Touch</span>
        </div>
      </div>
    </div>
  )
}


export default Home