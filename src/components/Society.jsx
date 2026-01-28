import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Phone, PhoneCall, Bell, MapPin, Globe, Radio, Star, Users, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Society = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power4.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.hero-emblem-keys',
      { rotation: 0, scale: 0.8, opacity: 0 },
      { rotation: 360, scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.2)" }
    );

    gsap.from('.society-title-char', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: 'back.out(1.7)',
    });

    const textSections = gsap.utils.toArray('.network-header, .philosophy-text');

    textSections.forEach((section) => {
      const title = section.querySelector('.society-page-title');
      const desc = section.querySelector('.society-page-desc');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      tl.from(title, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
        .from(desc, {
          y: 15,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, "-=0.5");
    });

    gsap.from('.hotel-card', {
      scrollTrigger: {
        trigger: '.network-grid',
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.to('.ringing-icon', {
      rotation: 20,
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });

    gsap.to('.status-dot', {
      opacity: 0.4,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  const titleText = "THE SOCIETY";
  const words = titleText.split(" ");

  return (
    <div className="society-page" ref={containerRef}>

      {/* HERO SECTION */}
      <section className="society-hero">
        <div className="society-hero-content">
          <div className="emblem-wrapper">
            <div className="hero-emblem-keys">
              <Key size={64} className="key-icon left-key" />
              <Key size={64} className="key-icon right-key" />
            </div>
            <div className="emblem-ring"></div>
          </div>
          <h1 className="society-main-title">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="society-title-word">
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="society-title-char" >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="divider-line"></div>
          <p className="society-subtitle">OF THE SILENT LOCKS</p>
          <p className="society-quote">"We are always there."</p>
        </div>
      </section>

      {/* THE NETWORK */}
      <section className="network-section">
        <div className="network-container">

          <div className="network-header">
            <h2 className="network-title society-page-title">THE <span className="highlight">NETWORK</span></h2>
            <p className="network-desc society-page-desc">
              A concierge is never helpless. With just one phone call, they can connect with other members of the community across Europe. The chain never breaks, and service never falters.
            </p>
          </div>

          <div className="network-grid">
            <div className="hotel-card card-ivanhoe">
              <div className="color-strip brown-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar brown-glow">
                  <PhoneCall size={24} className="ringing-icon" color="#a46743" />
                </div>
                <h3 className="concierge-name">M. IGOR</h3>
                <span className="hotel-name">Hotel Excalia</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Vunzt</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot brown-dot"></div>
                  <span>CONNECTED</span>
                </div>
              </div>
            </div>

            <div className="hotel-card card-flanagan">
              <div className="color-strip green-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar green-glow">
                  <Phone size={24} className="ringing-icon" color="#77dd77" />
                </div>
                <h3 className="concierge-name">M. ROGEAU</h3>
                <span className="hotel-name">Château Lévance</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Toledeux</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot green-dot"></div>
                  <span>RELAYING</span>
                </div>
              </div>
            </div>

            <div className="hotel-card card-ritz">
              <div className="color-strip orange-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar orange-glow">
                  <Bell size={24} className="ringing-icon" color="#9f462b" />
                </div>
                <h3 className="concierge-name">M. ALDONI</h3>
                <span className="hotel-name">Palazzo Spricessa</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Lunafresca</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot orange-dot"></div>
                  <span>ALERTED</span>
                </div>
              </div>
            </div>

            <div className="hotel-card card-palace">
              <div className="color-strip blue-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar blue-glow">
                  <PhoneCall size={24} className="ringing-icon" color="#aec6cf" />
                </div>
                <h3 className="concierge-name">M. BENOIR</h3>
                <span className="hotel-name">Côte de Flore</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Bosconne</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot blue-dot"></div>
                  <span>STANDBY</span>
                </div>
              </div>
            </div>

            <div className="hotel-card card-excelsior">
              <div className="color-strip silver-strip"></div>
              <div className="card-inner">
                <div className="concierge-avatar silver-glow">
                  <Radio size={24} className="ringing-icon" color="#a9253f" />
                </div>
                <h3 className="concierge-name">M. MELVIN</h3>
                <span className="hotel-name">Rizot Voyage</span>
                <div className="card-divider"></div>
                <div className="location-info">
                  <MapPin size={14} className="icon-small" /> <span>Pormontier</span>
                </div>
                <div className="status-indicator">
                  <div className="status-dot silver-dot"></div>
                  <span>LISTENING</span>
                </div>
              </div>
            </div>

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

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-visual-wrapper">
            <div className="panache-bottle-container" >
              <div className="bottle-cap"></div>
              <div className="bottle-neck"></div>
              <div className="bottle-body">
                <div className="bottle-label">
                  <p className='bottle-label-text'>L'Esprit </p>
                  <p className='bottle-label-text'>d'Élégance</p>
                </div>
                <div className="bottle-liquid"></div>
              </div>
            </div>
          </div>

          <div className="philosophy-text">
            <h3 className="philosophy-text-title society-page-title">
              THE <span className="highlight">SCENT</span>
            </h3>
            <p className="philosophy-text-description society-page-desc">
              Each member always has a bottle on hand. You never know when you might need it, especially if you're in a tight spot. It's a lifesaver. </p>
            <div className="quote-block">
              <Quote size={20} className="quote-icon" />
              <p className='philosophy-quote'>"A few drops can mask even the most unpleasant scents."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="society-footer">
        <div className="footer-content">
          <Star size={16} fill="#d4af37" color="#d4af37" />
          <p className='footer-motto'>CONFEDERACY OF THE SILENT LOCKS</p>
          <Star size={16} fill="#d4af37" color="#d4af37" />
        </div>
        <p className="footer-sub">Excellence. Discretion. Loyalty.</p>
      </div>

    </div>
  );
};

export default Society;