import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Concierge from './components/Concierge.jsx'
import Patisserie from './components/Patisserie.jsx'
import Society from './components/Society.jsx'
import Transportation from './components/Transportation.jsx'
import Memoirs from './components/Memoirs.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/concierge' element={<Concierge />} />
          <Route path='/patisserie' element={<Patisserie />} />
          <Route path='/society' element={<Society />} />
          <Route path='/transportation' element={<Transportation />} />
          <Route path='/memoirs' element={<Memoirs />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>


      </div>

    </>
  )
}

export default App
