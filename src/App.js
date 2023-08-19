import React, { useState, useEffect } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Work from './pages/Work'

import './styles/app.css'
import { routes } from './pages/Routes'

const openLink = (url) => {
  window.open(url, '_blank', 'noreferrer')
}

const App = () => {

  return (
    <div className='app'>
      <Header />
      <Home openLink={openLink} />
      <About />
      <Work/>
      <Projects openLink={openLink} />
      <Contact />
      <Footer/>
    </div>

  )
}

export default App