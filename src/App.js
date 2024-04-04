import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Work from './pages/Work'

import './styles/app.css'

const openLink = (url) => {
  window.open(url, '_blank', 'noreferrer')
}

const App = () => {

  const executeScroll = (id) => {
    const element = document.getElementById(id)
    if (element) { element.scrollIntoView({ behavior: 'smooth' }) }
  }

  return (


    <div className='app'>
      <Header executeScroll={executeScroll}/>
      <Home openLink={openLink} executeScroll={executeScroll}/>
      {/* <About /> */}
      <Work />
      <Projects openLink={openLink} />
      <Contact openLink={openLink} />
      {/* <Footer /> */}
    </div>

  )
}

export default App