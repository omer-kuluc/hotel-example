import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Bell, Key, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP kapsamı için referans
  const comp = useRef(null);

  // Ekran boyutu 768px'in üzerindeyse menüyü kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // ANIMASYONLAR: useLayoutEffect ile render öncesi hazırlık
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // 1. Header Title Animasyonu (.from yerine .to kullanıyoruz)
      // Başlangıç değerleri aşağıda style={{...}} içinde verildi.
      gsap.to('.header-title', {
        duration: 1.5,
        y: 0,           // -50'den 0'a
        opacity: 1,     // 0'dan 1'e
        scale: 1,       // 0.95'ten 1'e
        ease: 'power3.out',
      });

      // 2. Nav Linkleri Animasyonu
      gsap.to('nav a', {
        duration: 1,
        opacity: 1,     // 0'dan 1'e
        y: 0,           // 20'den 0'a
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out',
      });

      // 3. Pulse Animasyonu
      // Bu sürekli bir döngü olduğu için .to ile başlatıyoruz
      gsap.to(".animate-pulse", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });

    }, comp); // Scope olarak comp ref'ini kullanıyoruz

    return () => ctx.revert(); // Temizlik
  }, []);

  // Scroll İşlemleri (Event Listener olduğu için useEffect uygundur)
  useEffect(() => {
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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Inline stiller ile başlangıç durumlarını (hidden) tanımlıyoruz.
  // Bu sayede JS yüklenene kadar ekranda titreme olmaz.
  const titleStyle = { opacity: 0, transform: 'translateY(-50px) scale(0.95)' };
  const navItemStyle = { opacity: 0, transform: 'translateY(20px)', display: 'inline-block' };

  return (
    // ref={comp} ile GSAP context'ini kapsayıcıya bağlıyoruz
    <header ref={comp} className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
          <h1 className="header-title" style={titleStyle}>The Grand Budapest Hotel</h1>
          <p className="header-subtitle">Republic of Zubrowka</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {/* Linklere stil ekleyerek başlangıçta gizliyoruz */}
          <Link className='nav-item' to="/concierge" style={navItemStyle}>
            The Concierge <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/patisserie" style={navItemStyle}>
            Patisserie <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/society" style={navItemStyle}>
            Society <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/transportation" style={navItemStyle}>
            Transportation <span className="underline"></span>
          </Link>
          <Link className='nav-item' to="/memoirs" style={navItemStyle}>
            Memoirs <span className="underline"></span>
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