// App.jsx
import { useState, useEffect } from 'react'
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
import Loading from './components/Loading.jsx' // Loading import edildi

function App() {
  // Başlangıçta loading true
  const [isLoading, setIsLoading] = useState(true);

  // Loading tamamlandığında çağrılacak fonksiyon
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading durumu varsa göster */}
      {isLoading && <Loading onComplete={handleLoadingComplete} />}

      {/* Ana İçerik */}
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