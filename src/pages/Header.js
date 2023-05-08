import React, { useState } from 'react';
// import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Routes } from './Routes';
import '../styles/header.css'

const Header = (props) => {

  return (
    <div className='header'>
      <div className='header-link' onClick={() => props.changePage(Routes.home.key)}>Home</div>
      <div className='header-link' onClick={() => props.changePage(Routes.about.key)}>About</div>
      <div className='header-link' onClick={() => props.changePage(Routes.work.key)}>Work</div>
      <div className='header-link' onClick={() => props.changePage(Routes.skills.key)}>Skills</div>
      <div className='header-link' onClick={() => props.changePage(Routes.contact.key)}>Contact</div>
    </div>

  )
}

export default Header