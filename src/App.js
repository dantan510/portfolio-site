import React, { useState } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './styles/app.css'
import { routes } from './pages/Routes'


function getActivePage(pageKey) {
  const ActivePage = routes[pageKey].component;
  return <ActivePage />;
}

const App = () => {
  const [activePage, setActivePage] = useState(<Home/>);
  // let activePageComponent = getActivePage(activePage);

  // const pages = [
  //   {
  //     id: 1,
  //     title: 'Home'
  //   },
  //   {
  //     id: 2,
  //     title: 'About'
  //   },
  //   {
  //     id: 3,
  //     title: 'Projects'
  //   },
  //   {
  //     id: 4,
  //     title: 'Skills'
  //   },
  //   {
  //     id: 5,
  //     title: 'Contact'
  //   },
  // ]

  return (
    <div className='app'>
      <Header changePage={setActivePage} />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>

  )
}

export default App