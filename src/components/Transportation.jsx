import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ticket, Mountain, Gauge, Bike, Snowflake, Wind } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Transportation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Hero Başlık Animasyonu
    gsap.from('.trans-title-char', {
      y: 50, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.out(1.7)',
    });

    // 2. TREN ANİMASYONU (Zubrowka Express)
    // Tren sağdan sola (veya tersi) ekranı boydan boya geçer
    gsap.fromTo('.train-composition',
      { x: '100%' },
      {
        x: '-100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.train-section',
          start: 'top bottom', // Bölüm göründüğünde başla
          end: 'bottom top',   // Bölüm bitene kadar
          scrub: 1,            // Scroll ile senkronize
        }
      }
    );

    // Tekerlek Dönme Efekti
    gsap.to('.train-wheel', {
      rotation: -360,
      repeat: -1,
      duration: 1,
      ease: 'linear'
    });

    // 3. FÜNİKÜLER ANİMASYONU (Raydan çıkmaması için parent container içinde hareket)
    gsap.fromTo('.funicular-car',
      { x: '0%' }, // Rayın en altından
      {
        x: '85%', // Rayın en tepesine
        ease: 'none',
        scrollTrigger: {
          trigger: '.funicular-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      }
    );

    // 4. Icons Animation (Chase Section)
    gsap.from('.vehicle-badge', {
      scrollTrigger: {
        trigger: '.chase-section',
        start: 'top 70%',
      },
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // 5. Getaway Car (Mevcut)
    gsap.from('.vintage-car-visual', {
      scrollTrigger: {
        trigger: '.getaway-section',
        start: 'top 60%',
      },
      scale: 0.8,
      y: 20,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Kar Efekti
    gsap.to('.falling-snow', {
      y: '100vh',
      opacity: 0,
      duration: 'random(3, 8)',
      stagger: { amount: 5, from: "random" },
      repeat: -1,
      ease: "linear"
    });

  }, []);

  return (
    <div className='transportation-page' ref={containerRef}>

      {/* HERO SECTION */}
      <section className="trans-hero">
        <div className="hero-content">
          <div className="ticket-icon-wrapper">
            <Ticket size={48} color="#d4af37" />
          </div>
          <h1 className="trans-title">
            {"TRANSIT AUTHORITY".split('').map((char, index) => (
              <span key={index} className="trans-title-char">{char}</span>
            ))}
          </h1>
          <div className="divider-gold"></div>
          <p className="trans-subtitle">REPUBLIC OF ZUBROWKA</p>
        </div>
      </section>

      {/* 1. THE ZUBROWKA EXPRESS (Green Train) */}
      <section className="train-section">
        <div className="section-container">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">EXPRESS</span></h2>
            <p className="vehicle-desc">
              Lutz'dan Nebelsbad'a uzanan demir ağlar. Askeri yeşil vagonlar,
              sert ama konforlu koltuklar ve tarlaların arasından süzülen bir tarih.
            </p>
            <div className="route-badge">
              <span>LUTZ</span> <span className="arrow">➝</span> <span>NEBELSBAD</span>
            </div>
          </div>

          <div className="train-track-container">
            {/* Tüm Tren Grubu */}
            <div className="train-composition">

              {/* LOKOMOTİF */}
              <div className="locomotive">
                <div className="chimney">
                  <div className="smoke s1"></div>
                  <div className="smoke s2"></div>
                </div>
                <div className="engine-body">
                  <div className="engine-window"></div>
                  <div className="stripe-line"></div>
                </div>
                <div className="cow-catcher"></div>
                <div className="wheels-container">
                  <div className="train-wheel big"></div>
                  <div className="train-wheel big"></div>
                </div>
              </div>

              {/* VAGON 1 */}
              <div className="wagon">
                <div className="wagon-body">
                  <div className="wagon-window"></div>
                  <div className="wagon-window"></div>
                  <div className="stripe-line"></div>
                  <span className="wagon-text">ZB-1</span>
                </div>
                <div className="wheels-container">
                  <div className="train-wheel small"></div>
                  <div className="train-wheel small"></div>
                </div>
              </div>

              {/* VAGON 2 */}
              <div className="wagon">
                <div className="wagon-body">
                  <div className="wagon-window"></div>
                  <div className="wagon-window"></div>
                  <div className="stripe-line"></div>
                  <span className="wagon-text">ZB-2</span>
                </div>
                <div className="wheels-container">
                  <div className="train-wheel small"></div>
                  <div className="train-wheel small"></div>
                </div>
              </div>

            </div>
            {/* Ray */}
            <div className="rail-track"></div>
          </div>
        </div>
      </section>

      {/* 2. THE ASCENT (Blue Funicular) */}
      <section className="funicular-section">
        <div className="section-container reverse-layout">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">FUNICULAR</span></h2>
            <p className="vehicle-desc">
              Otel, bulutların üzerindeki bir kale gibidir. Oraya ulaşmanın tek yolu,
              karlı yamaçlara sıkıca tutunan bu mavi vagonlardır.
            </p>
            <div className="altitude-badge">
              <Mountain size={16} /> <span>ALTITUDE: 5000ft</span>
            </div>
          </div>

          <div className="funicular-visual-area">
            {/* Eğimli Ray Sistemi */}
            <div className="sloped-track">
              <div className="cable-line"></div>

              {/* Hareket Eden Vagon */}
              <div className="funicular-car">
                <div className="car-hanger"></div>
                <div className="car-body">
                  <div className="car-windows">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="car-stripe"></div>
                  <div className="car-logo">GB</div>
                </div>
              </div>
            </div>
            <div className="mountain-bg"></div>
          </div>
        </div>
      </section>

      {/* 3. THE CHASE (Icons instead of CSS Art) */}
      <section className="chase-section">
        <div className="snow-overlay">
          {[...Array(15)].map((_, i) => <Snowflake key={i} className="falling-snow" size={12} style={{ left: `${Math.random() * 100}%` }} />)}
        </div>

        <div className="section-container">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">PURSUIT</span></h2>
            <p className="vehicle-desc">
              Bazen ulaşım konfor için değil, hız içindir.
              Jopling'in karanlık motosikleti ve Gabelmeister Zirvesi'nden aşağı kayan o meşhur kızak.
            </p>
            <div className="speed-badge">
              <Gauge size={16} /> <span>MAX SPEED</span>
            </div>
          </div>

          <div className="visual-content chase-icons-wrapper">

            {/* Motorcycle Badge */}
            <div className="vehicle-badge moto-badge">
              <div className="badge-inner">
                <Bike size={48} color="#333" strokeWidth={1.5} />
                <span className="badge-label">JOPLING'S MOTO</span>
              </div>
            </div>

            {/* Sled Badge */}
            <div className="vehicle-badge sled-badge">
              <div className="badge-inner">
                <Wind size={48} color="#5c4033" strokeWidth={1.5} />
                <span className="badge-label">THE SLED</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE GETAWAY (Taxi) */}
      <section className="getaway-section">
        <div className="snow-container">
          {[...Array(20)].map((_, i) => (
            <Snowflake
              key={i}
              className="falling-snow"
              size={Math.random() * 10 + 10}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="getaway-content">
          <div className="car-wrapper">
            <div className="vintage-car-visual">
              <div className="headlight-beams"></div>
              <div className="taxi-roof"><div className="taxi-sign">TAXI</div></div>
              <div className="taxi-body">
                <div className="windshield">
                  <div className="silhouette driver"></div>
                  <div className="silhouette passenger-1"></div>
                  <div className="silhouette passenger-2"></div>
                </div>
                <div className="grill-area"><div className="grill-lines"></div></div>
                <div className="lights"><div className="headlight left"></div><div className="headlight right"></div></div>
                <div className="bumper"></div>
                <div className="plate">IVAN-1</div>
              </div>
              <div className="tires"><div className="tire left-tire"></div><div className="tire right-tire"></div></div>
            </div>
          </div>

          <div className="getaway-text-area">
            <h3 className="section-title">THE <span className="highlight">GETAWAY</span></h3>
            <p className="section-desc">
              Karlı bir gece, eski bir taksi ve mutlak sadakat.
              M. Ivan göreve hazır.
            </p>
            <div className="quote-box">
              <p>"Take over, Monsieur Gustave."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="trans-footer">
        <p>SAFE TRAVELS</p>
      </div>
    </div>
  );
};

export default Transportation;