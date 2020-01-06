import React from 'react'
import Navbar from './blocks/Navbar'
import { HashRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import PageManager from './pages/PageManager'

const App = () => {
  return (
    <div className="app">
      <AppProvider>
        <HashRouter basename='/'>
          <Navbar />
          <div className="page-content">
            <PageManager />
          </div>
        </HashRouter>
      </AppProvider>
    </div>
  )
}

export default App
