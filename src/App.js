import React, { useState } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { Routes } from './pages/Routes'

function getActivePage(pageKey) {
  const ActivePage = Routes[pageKey].component;
  return <ActivePage/>;
}

const App = () => {
  const [activePage, setActivePage] = useState(Routes.home.key);
  let activePageComponent = getActivePage(activePage);

  return (
    <>
      <Header changePage={setActivePage}/>
      {activePageComponent}
    </>
  )
}

export default App