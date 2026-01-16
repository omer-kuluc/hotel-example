import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Phone, PhoneCall, Bell, MapPin, Globe, Radio, Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Society = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Hero: Anahtarların Dönüşü (Home.jsx mantığıyla)
    gsap.fromTo('.hero-emblem-keys',
      { rotation: 0, scale: 0.8, opacity: 0 },
      { rotation: 360, scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.2)" }
    );

    gsap.from('.society-title-char', {
      y: 50, opacity: 0, stagger: 0.05, duration: 1, ease: 'power3.out', delay: 0.5
    });

    // 2. Network Grid Animasyonu
    gsap.from('.hotel-card', {
      scrollTrigger: {
        trigger: '.network-grid',
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.15, // Kartlar sırayla gelsin
      duration: 1,
      ease: 'power3.out',
    });

    // 3. Telefonların Çalması (Sürekli Loop)
    gsap.to('.ringing-icon', {
      rotation: 20,
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });

    // Status Işıkları (Pulse)
    gsap.to('.status-dot', {
      opacity: 0.4,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  const titleText = "THE SOCIETY";
  const words = titleText.split(" "); // Önce kelimelere böl ["MONSIEUR", "GASTON"]


  return (
    <div className="society-page" ref={containerRef}>

      {/* HERO SECTION */}
      <section className="society-hero">
        <div className="hero-content">
          <div className="emblem-wrapper">
            <div className="hero-emblem-keys">
              <Key size={64} className="key-icon left-key" />
              <Key size={64} className="key-icon right-key" />
            </div>
            <div className="emblem-ring"></div>
          </div>
          <h1 className="society-main-title">
            {/* Kelimeleri döndür */}
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="title-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: '0 10px' }}>
                {/* Her kelimenin harflerini döndür */}
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="society-title-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="divider-line"></div>
          <p className="society-subtitle">OF THE CROSSED KEYS</p>
          <p className="society-quote">"We are always there."</p>
        </div>
      </section>

      {/* THE NETWORK: EXPANDED LIST */}
      <section className="network-section">
        <div className="network-container">

          <div className="network-header">
            <h2 className="section-title">THE <span className="highlight">CALLING</span> TREE</h2>
            <p className="section-desc">
              Bir Concierge asla çaresiz değildir. Bir telefonla, Avrupa'nın dört bir yanındaki
              kardeşlerimiz ayağa kalkar. Zincir kopmaz, hizmet aksamaz.
            </p>
          </div>

          <div className="network-grid">

            {/* 1. HOTEL IVANHOE (Blue - M. Ivan) */}
            <div className="hotel-card card-ivanhoe">
              <div className="color-strip blue-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar blue-glow">
                  <PhoneCall size={24} className="ringing-icon" color="#aec6cf" />
                </div>
                <h3 className="concierge-name">M. IVAN</h3>
                <span className="hotel-name">Hotel Ivanhoe</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Lutz</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot blue-dot"></div>
                  <span>CONNECTED</span>
                </div>
              </div>
            </div>

            {/* 2. THE FLANAGAN (Yellow - M. Georges) */}
            <div className="hotel-card card-flanagan">
              <div className="color-strip yellow-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar yellow-glow">
                  <Phone size={24} className="ringing-icon" color="#fdfd96" />
                </div>
                <h3 className="concierge-name">M. GEORGES</h3>
                <span className="hotel-name">The Flanagan</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Riviera</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot yellow-dot"></div>
                  <span>RELAYING</span>
                </div>
              </div>
            </div>

            {/* 3. RITZ IMPERIAL (Green - M. Dino) */}
            <div className="hotel-card card-ritz">
              <div className="color-strip green-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar green-glow">
                  <Bell size={24} className="ringing-icon" color="#77dd77" />
                </div>
                <h3 className="concierge-name">M. DINO</h3>
                <span className="hotel-name">Ritz Imperial</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Pratzen Park</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot green-dot"></div>
                  <span>ALERTED</span>
                </div>
              </div>
            </div>

            {/* 4. PALACE HOTEL (Pink - M. Robin) */}
            <div className="hotel-card card-palace">
              <div className="color-strip pink-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar pink-glow">
                  <PhoneCall size={24} className="ringing-icon" color="#fbc4d3" />
                </div>
                <h3 className="concierge-name">M. ROBIN</h3>
                <span className="hotel-name">Palace Hotel</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Brabant</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot pink-dot"></div>
                  <span>STANDBY</span>
                </div>
              </div>
            </div>

            {/* 5. EXCELSIOR (Silver/Grey - M. Martin) */}
            <div className="hotel-card card-excelsior">
              <div className="color-strip silver-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar silver-glow">
                  <Radio size={24} className="ringing-icon" color="#d3d3d3" />
                </div>
                <h3 className="concierge-name">M. MARTIN</h3>
                <span className="hotel-name">Excelsior</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>North</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot silver-dot"></div>
                  <span>LISTENING</span>
                </div>
              </div>
            </div>

            {/* 6. GLOBAL NETWORK (Summary Card) */}
            <div className="hotel-card card-global">
              <div className="color-strip gold-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar gold-glow">
                  <Globe size={24} color="#d4af37" />
                </div>
                <h3 className="concierge-name">GLOBAL</h3>
                <span className="hotel-name">Network Status</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <Users size={14} className="icon-small" /> <span>All Active</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot gold-dot"></div>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <div className="society-footer">
        <div className="footer-content">
          <Star size={16} fill="#d4af37" color="#d4af37" />
          <p>CONFEDERACY OF THE CROSSED KEYS</p>
          <Star size={16} fill="#d4af37" color="#d4af37" />
        </div>
        <p className="footer-sub">Excellence. Discretion. Loyalty.</p>
      </div>

    </div>
  );
};

export default Society;