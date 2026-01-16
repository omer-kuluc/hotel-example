import { useState, useEffect } from 'react'
import './App.css'
// 1. useLocation'ı buraya ekle
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Concierge from './components/Concierge.jsx'
import Patisserie from './components/Patisserie.jsx'
import Society from './components/Society.jsx'
import Transportation from './components/Transportation.jsx'
import Memoirs from './components/Memoirs.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'
import Loading from './components/Loading.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // 2. Mevcut sayfa yolunu (pathname) al
  const { pathname } = useLocation();

  // 3. Sayfa yolu her değiştiğinde (pathname) ekranı en tepeye (0,0) kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
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
        </>
      )}
    </>
  )
}

export default App;