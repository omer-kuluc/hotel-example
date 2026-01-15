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

  // ANIMASYONLAR
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to('.header-title', {
        duration: 1.5,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      });

      gsap.to('nav a', {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out',
      });

      gsap.to(".animate-pulse", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });

    }, comp);

    return () => ctx.revert();
  }, []);

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

  const titleStyle = { opacity: 0, transform: 'translateY(-50px) scale(0.95)' };
  const navItemStyle = { opacity: 0, transform: 'translateY(20px)', display: 'inline-block' };

  return (
    <header ref={comp} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="top-accent-line">
          <div className="line"></div>
          <div className="icons">
            <Key size={16} className="animate-pulse" />
            <Bell size={16} />
          </div>
          <div className="line"></div>
        </div>

        <div className="title-container">
          <h1 className="header-title" style={titleStyle}>The Majestic Bellmont Hotel</h1>
          <div className="middle-title-container">
            <Link className='nav-item' to="/" >
              HOME <span className="underline"></span>
            </Link>
            <p className="header-subtitle">Republic of Torvonka</p>
            {/* Credits'e de underline efekti için span eklendi */}
            <p className='nav-item'>
              CREDITS <span className="underline"></span>
            </p>
          </div>
        </div>

        <nav className="nav-desktop">
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

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Key className="icon-large" size={48} />
          <Link className='mobile-nav-item' to="/" onClick={handleMenuItemClick}>Home
            <span className="underline"></span>
          </Link>
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