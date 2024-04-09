import React, { useState, useRef } from 'react';
import '../styles/header.css'


const Header = ({ executeScroll }) => {

  return (

    <div className='header'>
      <div className='header-links'>
        <div className='line-left'></div>
        <nav className='links'>
          <a onClick={() => executeScroll('home')}>Home</a>
          <a onClick={() => executeScroll('work')}>Experience</a>
          <a onClick={() => executeScroll('projects')}>Projects</a>
          <a onClick={() => executeScroll('contact')}>Contact</a>
        </nav>
        <div className='line-right'></div>
      </div>
    </div>
  )
}

export default Header

