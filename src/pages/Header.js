import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll'
import '../styles/header.css'


const Header = () => {

  const executeScroll = (id) => {
    const element = document.getElementById(id)
    if (element) { element.scrollIntoView({ behavior: 'smooth' })}
  }

  return (

    <div className='header'>
      <div className='header-links'>
        <div className='line-left'></div>
        <nav className='links'>
          <a onClick={() => executeScroll('about')}>About</a>
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

