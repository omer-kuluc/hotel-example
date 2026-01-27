import { useState, useLayoutEffect } from 'react'
import './App.css'
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
import Footer from './components/Footer.jsx'

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper">
      {children}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <Header />
          <PageWrapper>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/concierge' element={<Concierge />} />
              <Route path='/patisserie' element={<Patisserie />} />
              <Route path='/society' element={<Society />} />
              <Route path='/transportation' element={<Transportation />} />
              <Route path='/memoirs' element={<Memoirs />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </>
      )}
    </>
  )
}

export default App;