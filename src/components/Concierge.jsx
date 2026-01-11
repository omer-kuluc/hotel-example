import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Feather, Star, Scroll, Crown, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Concierge() {
  const containerRef = useRef(null);
  const [sprayKey, setSprayKey] = useState(0); // Sprey animasyonunu tetiklemek için

  // Parfüm sıkma fonksiyonu
  const handleSpray = () => {
    setSprayKey(prev => prev + 1);

    // Parfüm Bulutu Animasyonu
    const tl = gsap.timeline();
    tl.fromTo('.scent-particle',
      { opacity: 1, scale: 0, x: 0, y: 0 },
      {
        opacity: 0,
        scale: 2,
        x: () => Math.random() * 100 - 50,
        y: () => Math.random() * -100 - 20,
        duration: 1.5,
        stagger: 0.05,
        ease: "power2.out"
      }
    );
  };

  useEffect(() => {
    // Giriş Animasyonu: Anahtarların birleşmesi
    gsap.fromTo('.hero-crossed-keys',
      { rotate: 0, scale: 0.5, opacity: 0 },
      { rotate: 360, scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
    );

    // Yazıların gelişi
    gsap.from('.gustave-quote', {
      scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%' },
      y: 30, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Lobby Boy Şapkası
    gsap.from('.lobby-hat', {
      scrollTrigger: { trigger: '.mentorship-section', start: 'top 60%' },
      y: -100, rotation: 10, opacity: 0, duration: 1.2, ease: "bounce.out"
    });

  }, []);

  return (
    <div className="concierge-page" ref={containerRef}>

      {/* HERO SECTION: THE PORTRAIT */}
      <section className="gustave-hero">
        <div className="hero-frame-border">
          <div className="hero-content">
            <div className="hero-icon-wrapper">
              <div className="hero-crossed-keys">
                <Key size={64} className="key-icon left-key" />
                <Key size={64} className="key-icon right-key" />
              </div>
            </div>
            <h1 className="concierge-headline">Monsieur Gustave H.</h1>
            <div className="title-divider"></div>
            <p className="concierge-subhead">THE CONCIERGE OF THE GRAND BUDAPEST</p>
            <div className="hero-badges">
              <Star size={16} fill="#d4af37" />
              <span>EXCELLENCE</span>
              <Star size={16} fill="#d4af37" />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="quote-container">
          <Quote size={40} className="quote-icon-start" />
          <p className="gustave-quote">
            "Barbarlığın mezbahasında hâlâ bir medeniyet parıltısı var.
            İşte insanlık o parıltıdır."
          </p>
          <p className="quote-author">- M. Gustave</p>
          <div className="poem-link">
            <Feather size={18} />
            <span>Romantic Poetry Recitals every evening</span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE: L'AIR DE PANACHE */}
      <section className="panache-section">
        <div className="panache-container">
          <div className="panache-text">
            <h2 className="section-title">L'Air de <span className="highlight-purple">Panache</span></h2>
            <p className="section-desc">
              Mösyö Gustave asla kokusuz gezmez. Misk, gül ve biraz da melankoli içeren
              bu koku, onun imzasıdır. Sıkmayı unutmayın.
            </p>
            <div className="click-hint">(Şişeye Tıklayın)</div>
          </div>

          <div className="perfume-visual" onClick={handleSpray}>
            {/* CSS Parfüm Şişesi */}
            <div className="bottle-atomizer"></div>
            <div className="bottle-neck"></div>
            <div className="bottle-body">
              <div className="bottle-label">
                <span>L'AIR</span>
                <span className="small">de</span>
                <span>PANACHE</span>
              </div>
              <div className="bottle-liquid"></div>
            </div>

            {/* GSAP Particles */}
            <div className="spray-particles">
              {[...Array(12)].map((_, i) => (
                <div key={`${sprayKey}-${i}`} className="scent-particle"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP & LOBBY BOY */}
      <section className="mentorship-section">
        <div className="mentorship-content">
          <div className="lobby-boy-visual">
            {/* CSS Lobby Boy Şapkası */}
            <div className="lobby-hat">
              <div className="hat-text">LOBBY BOY</div>
            </div>
          </div>

          <div className="mentorship-text">
            <h3 className="mentorship-title">THE PROTÉGÉ</h3>
            <p className="mentorship-desc">
              "Sıfır mı? Ne garip bir isim." <br />
              İyi bir Concierge asla yalnız çalışmaz. En güvendiği Lobby Boy ile birlikte,
              bir otelin en karanlık sırlarını bile çözebilir. Sadakat, en büyük erdemdir.
            </p>
            <div className="stats-box">
              <div className="stat">
                <Scroll size={20} className="stat-icon" />
                <span>Secrets Kept</span>
              </div>
              <div className="stat">
                <Crown size={20} className="stat-icon" />
                <span>Legacy Secured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="crossed-keys-society">
        <div className="society-content">
          <div className="society-emblem">
            <Key size={48} className="society-key" />
            <div className="emblem-circle"></div>
            <Key size={48} className="society-key rotate-90" />
          </div>
          <h3>THE SOCIETY OF THE CROSSED KEYS</h3>
          <p>Her zaman hizmetinizde.</p>
        </div>
      </section>

    </div>
  );
};

export default Concierge;