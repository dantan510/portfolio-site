import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll'
import { routes } from './Routes';
import '../styles/header.css'

const Header = ({ changePage }) => {


  return (
    <div className='header'>
      <div className='header-links'>
        <Link to={'/home'} spy={true} smooth={true} offset={50} duration={500}>Home</Link>
        <Link to={'/about'} spy={true} smooth={true} offset={50} duration={500}>About</Link>
        <Link to={'/projects'} spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
        <Link to={'/skills'} spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
        <Link to={'/contact'} spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
      </div>
      {/* <a className='header-link' id='home' onClick={() => changePage(routes.home.key)}>Home</a>
      <a className='header-link' id='about' onClick={() => changePage(routes.about.key)}>About</a>
      <a className='header-link' id='projects' onClick={() => changePage(routes.projects.key)}>Projects</a>
      <a className='header-link' id='skills'  onClick={() => changePage(routes.skills.key)}>Skills</a>
      <a className='header-link' id='contact'  onClick={() => changePage(routes.contact.key)}>Contact</a> */}
    </div>
  )
}

export default Header