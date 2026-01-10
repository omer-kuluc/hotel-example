import React, { useEffect, useRef, useState } from 'react';
import { Bell, Key, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ekran boyutu 768px'in üzerindeyse menüyü kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false); // Menüyü kapat
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Temizleme işlemi
  }, [isMenuOpen]);

  useEffect(() => {
    // GSAP animasyonları
    gsap.from('.header-title', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      scale: 0.95,
      ease: 'power3.out',
    });

    gsap.from('nav a', {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power2.out',
    });

    gsap.to(".animate-pulse", {
      opacity: 0,
      repeat: -1,  // Sonsuz tekrarlama
      yoyo: true,  // İleri geri animasyon
      duration: 1,  // Her bir animasyon döngüsü 1 saniye
      ease: 'power1.inOut',  // Easing fonksiyonu
    });

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menü öğesine tıklanıldığında menüyü kapatma fonksiyonu
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Üst Accent Line */}
        <div className="top-accent-line">
          <div className="line"></div>
          <div className="icons">
            <Key size={16} className="animate-pulse" />
            <Bell size={16} />
          </div>
          <div className="line"></div>
        </div>

        {/* Başlık / Logo */}
        <div className="title-container">
          <h1 className="header-title">The Grand Budapest Hotel</h1>
          <p className="header-subtitle">Republic of Zubrowka</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link className='nav-item' to="/concierge">The Concierge
            <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/patisserie">Patisserie
            <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/society">Society
            <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/transportation">Transportation
            <span className="underline"></span>
          </Link>

          <Link className='nav-item' to="/memoirs">Memoirs
            <span className="underline"></span>
          </Link>
        </nav>

        {/* Mobil Menü Butonu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Key className="icon-large" size={48} />
          <Link className='mobile-nav-item' to="/concierge" onClick={handleMenuItemClick}>The Concierge
            <span className="underline"></span>
          </Link>
          <Link className='mobile-nav-item' to="/patisserie" onClick={handleMenuItemClick}>Patisserie
            <span className="underline"></span>
          </Link>
          <Link className='mobile-nav-item' to="/society" onClick={handleMenuItemClick}>Society
            <span className="underline"></span>
          </Link>
          <Link className='mobile-nav-item' to="/transportation" onClick={handleMenuItemClick}>Transportation</Link>
          <span className="underline"></span>

          <Link className='mobile-nav-item' to="/memoirs" onClick={handleMenuItemClick}>Memoirs
            <span className="underline"></span>
          </Link>

          <div className="footer">
            <p className="footer-text">Excellence is our Tradition</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
