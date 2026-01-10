import React, { useEffect, useState } from 'react';
import { Bell, Key, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navItems = [
    { label: 'The Concierge', href: '#' },
    { label: "Mendl's Patisserie", href: '#' },
    { label: 'Society of the Crossed Keys', href: '#' },
    { label: 'Transport', href: '#' },
    { label: 'Memoirs', href: '#' },

  ];

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
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              {item.label}
              <span className="underline"></span>
            </a>
          ))}
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
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="mobile-nav-item">
              {item.label}
            </a>
          ))}
          <div className="footer">
            <p className="footer-text">Excellence is our Tradition</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;  // Default export
