import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Star, Quote, Crown, Feather, Mic } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Concierge = () => {
  const containerRef = useRef(null);
  const [sprayed, setSprayed] = useState(false);

  // Parfüm sıkma efekti
  const handleSpray = () => {
    setSprayed(true);
    gsap.fromTo(".spray-mist",
      { opacity: 0, scale: 0.5, y: 10 },
      { opacity: 0.8, scale: 1.5, y: -50, duration: 1, ease: "power2.out", onComplete: () => setSprayed(false) }
    );
  };

  useEffect(() => {
    // Hero Başlık Animasyonu
    gsap.from('.gustave-title-char', {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    // Lobby Boy Şapkası Girişi
    gsap.from('.lobby-hat-visual', {
      scrollTrigger: {
        trigger: '.legacy-section',
        start: 'top 70%',
      },
      y: -50,
      rotation: -10,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)',
    });

    // Şiir Kürsüsü Animasyonu
    gsap.from('.poetry-visual', {
      scrollTrigger: {
        trigger: '.poetry-section',
        start: 'top 60%',
      },
      scale: 0.9,
      y: 30,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });

  }, []);

  return (
    <div className="concierge-page" ref={containerRef}>

      {/* HERO SECTION: M. GUSTAVE H. */}
      <section className="gustave-hero">
        <div className="gustave-hero-content">
          <div className="concierge-badge">
            <div className="crossed-keys-icon">
              <Key size={32} className="ck-left" />
              <Key size={32} className="ck-right" />
            </div>
            <span className="badge-text">CONCIERGE</span>
          </div>

          <h1 className="gustave-title">
            {"MONSIEUR GUSTAVE H.".split('').map((char, index) => (
              <span key={index} className="gustave-title-char">{char}</span>
            ))}
          </h1>
          <div className="hero-divider"></div>
          <p className="gustave-subtitle">
            "I keep the secrets, I serve the guests, I secure the legacy."
          </p>
          <div className="hero-stars">
            <Star size={16} fill="#d4af37" />
            <Star size={16} fill="#d4af37" />
            <Star size={16} fill="#d4af37" />
            <Star size={16} fill="#d4af37" />
            <Star size={16} fill="#d4af37" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION (Perfume) */}
      <section className="philosophy-section">
        <div className="philosophy-container">

          <div className="philosophy-visual-wrapper">
            <div className="panache-bottle-container" onClick={handleSpray}>
              <div className="bottle-cap"></div>
              <div className="bottle-neck"></div>
              <div className="bottle-body">
                <div className="bottle-label">
                  <span>L'AIR</span>
                  <span className="tiny">de</span>
                  <span>PANACHE</span>
                </div>
                <div className="bottle-liquid"></div>
              </div>
              <div className="spray-mist"></div>
              <div className="click-hint">(Click to Spray)</div>
            </div>
          </div>

          <div className="philosophy-text">
            <h3 className="section-title">
              THE <span className="highlight">PANACHE</span>
            </h3>
            <p className="section-description">
              "Burası bir zamanlar insanlık olarak bilinen o barbar mezbahasında,
              hâlâ medeniyetin cılız parıltılarını görebildiğiniz yerdir."
              Mösyö Gustave, en zor anlarda bile L'Air de Panache kokusundan ödün vermez.
            </p>
            <div className="quote-block">
              <Quote size={20} className="quote-icon" />
              <p>"Rudeness is merely the expression of fear."</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE LEGACY SECTION (Lobby Boy) */}
      <section className="legacy-section">
        <div className="legacy-container">

          <div className="legacy-visual-wrapper">
            {/* CSS Art: Lobby Boy Hat */}
            <div className="lobby-hat-visual">
              <div className="hat-top"></div>
              <div className="hat-band">
                <span className="hat-text">LOBBY BOY</span>
              </div>
              <div className="hat-badge">
                <Crown size={12} color="#d4af37" />
              </div>
            </div>
          </div>

          <div className="legacy-text">
            <h3 className="section-title">
              THE <span className="highlight">PROTÉGÉ</span>
            </h3>
            <p className="section-description">
              "Sıfır mı? Ne garip bir isim." <br />
              Bir Concierge asla yalnız değildir. Zero Moustafa, Mösyö Gustave'ın
              en sadık dostu, varisi ve sağ koludur. Tecrübe sıfır olsa da, sadakat sonsuzdur.
            </p>
          </div>

        </div>
      </section>

      {/* NEW: POETRY & DINNER SECTION */}
      <section className="poetry-section">
        <div className="poetry-container">

          <div className="poetry-visual-wrapper">
            {/* CSS Art: Podium & Candle */}
            <div className="poetry-visual">
              <div className="candle-holder">
                <div className="candle-body">
                  <div className="candle-flame"></div>
                </div>
              </div>
              <div className="podium-top">
                <div className="open-book">
                  <div className="book-page left-page"></div>
                  <div className="book-page right-page">
                    <div className="text-lines"></div>
                    <div className="text-lines"></div>
                    <div className="text-lines"></div>
                  </div>
                </div>
              </div>
              <div className="podium-stand"></div>
            </div>
          </div>

          <div className="poetry-text">
            <h3 className="section-title">
              THE <span className="highlight">ORATOR</span>
            </h3>
            <p className="section-description">
              Çorba servisi yapılmadan hemen önce, salon sessizliğe bürünür.
              Mösyö Gustave, akşam yemeklerini romantik şiir resitalleriyle taçlandırır.
              Dizeler, tıpkı servis edilen şarap gibi eski ve kıymetlidir.
            </p>
            <div className="poetry-actions">
              <div className="recital-time">
                <Feather size={16} color="#d4af37" />
                <span>Tonight's Selection: "The Painting"</span>
              </div>
              <button className="poetry-button">
                AKŞAM YEMEĞİNE KATILIN
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <div className="concierge-footer">
        <p>A member of</p>
        <h4 className="footer-society-text">THE SOCIETY OF THE CROSSED KEYS</h4>
      </div>

    </div>
  );
};

export default Concierge;