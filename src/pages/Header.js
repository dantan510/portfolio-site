import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll'
import { routes } from './Routes';
import '../styles/header.css'

const Header = () => {


  return (
    <div className='header'>
      <div className='header-links'>
        <div className='line-left'></div>
        <div className='links'>
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
          <a>Skills</a>
          <a>Contact</a>
        </div>
        <div className='line-right'></div>
      </div>
    </div>
  )
}

export default Header