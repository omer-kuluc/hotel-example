import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Key, PhoneCall, ArrowRight, TrainFront, BookOpen, PenTool } from 'lucide-react';
// 1. useNavigate import edildi
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // 2. Hook tanımlandı
  const navigate = useNavigate();

  useEffect(() => {
    // --- YENİ EKLENEN KISIM: HOME SAYFA GİRİŞ ANİMASYONU ---
    // Tüm konteynerin yumuşakça belirmesi
    gsap.fromTo(".home-container",
      { opacity: 0, scale: 0.98 }, // Hafif küçük ve görünmez başla
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.1 // Header ile çakışmaması için çok kısa bir gecikme
      }
    );

    // ScrollTrigger'ların doğru hesaplanması için refresh
    ScrollTrigger.refresh();
  }, []);

  return (
    // 'home-container' animasyonun uygulanacağı ana kapsayıcıdır
    <div className='home-container' style={{ opacity: 0 }}> {/* Başlangıçta gizli olsun diye inline style */}

      {/* Concierge Section */}
      <section className="concierge-section">
        <div className="concierge-container">
          <div className="perfume-wrapper">
            <div className="perfume-bottle">
              <div className="perfume-inner">
                <Sparkles className="perfume-sparkle" size={32} />
                <h3 className="perfume-title">L'Esprit d'Élégance</h3>
                <div className="perfume-divider"></div>
                <p className="perfume-subtitle">The Signature Scent of M. Gaston</p>
                <div className="perfume-keys">
                  <Key size={24} className="key-icon" />
                  <Key size={24} className="key-icon rotate-90" />
                </div>
              </div>
              <div className="premium-tag">PREMIUM</div>
            </div>
          </div>
          <div className="concierge-text">
            <h3 className="concierge-title">
              THE <span className="concierge-highlight">CONCIERGE</span>
            </h3>
            <p className="concierge-description">
              Monsieur Gaston, who lived during the hotel's brightest years, is a figure who continued to carry the faint lights of civilization even in the darkest times of humanity.</p>
            <div className="concierge-actions">
              <button
                className="concierge-button"
                onClick={() => navigate('/concierge')}
              >
                MEET GASTON
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Patisserie Section */}
      <section className="patisserie-section">
        <div className="patisserie-container">
          <div className="patisserie-box-wrapper">
            <div className="mendls-box">
              <div className="box-content">
                <h3 className="box-title">MADEL'S</h3>
                <div className="box-divider"></div>
                <p className="box-subtitle">Pâtissier</p>
                <div className="box-product">Sérénité au Chocolat</div>
              </div>
              <div className="box-badge">FRESHLY BAKED</div>
            </div>
          </div>

          <div className="patisserie-text">
            <h3 className="patisserie-title">
              THE <span className="patisserie-highlight">PATISSERIE</span>
            </h3>
            <p className="patisserie-description">
              Sérénité au Chocolat, offered in our legendary Madel's boxes, is Torvonka's sweetest secret. Each layer is a work of art, every bite a memory.
            </p>
            <button
              className="patisserie-button"
              onClick={() => navigate('/patisserie')}
            >
              EXPLORE MADEL'S
            </button>
          </div>
        </div>
      </section>

      {/* SOCIETY SECTION */}
      <section className="society-section">
        <div className="society-container">
          <div className="society-visual-wrapper">
            <div className="emblem-container">
              <div className="orbit-outer"></div>
              <div className="orbit-inner"></div>
              <div className="emblem-core">
                <div className="emblem-keys">
                  <Key size={40} className="key-left" />
                  <Key size={40} className="key-right" />
                </div>
                <div className="emblem-divider"></div>
                <p className="emblem-text">SOCIETY</p>
                <p className="emblem-subtext">The Calling Tree</p>
              </div>
              <div className="floating-phone"><PhoneCall size={24} /></div>
              <div className="floating-key"><Key size={20} /></div>
            </div>
          </div>

          <div className="society-text">
            <h3 className="society-title">
              THE <span className="society-highlight">SOCIETY</span>
            </h3>
            <p className="society-description">
              A secret network connecting Europe's most prestigious hotels.
              The Society of the Silent Locks is a chain of assistance that comes into play during the most challenging times.
              A single phone call can change everything.
            </p>
            <div className="society-actions">
              <button
                className="society-button"
                onClick={() => navigate('/society')}
              >
                JOIN THE SECRECY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORTATION SECTION */}
      <section className="transport-section">
        <div className="transport-container">
          <div className="ticket-wrapper">
            <div className="golden-ticket">
              <div className="ticket-inner">
                <div className="ticket-header">TORVONKA EXPRESS</div>
                <div className="ticket-route">
                  <span>VUNZT</span> <ArrowRight size={14} /> <span>BEMELSTAD</span>
                </div>
                <div className="ticket-icon-top"><TrainFront size={16} /></div>
                <div className="ticket-date">1932</div>
              </div>
            </div>
          </div>

          <div className="transport-text">
            <h3 className="transport-title">
              THE <span className="transport-highlight">TRANSPORT</span>
            </h3>
            <p className="transport-description">
              Your journey to the snowy peaks is where comfort meets adventure. Travel to the heart of the Alps with Torvonka Express' luxurious carriages, our legendary funicular, and cable car.</p>
            <div className="transport-actions">
              <button
                className="transport-button"
                onClick={() => navigate('/transportation')}
              >
                HIT THE ROAD!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MEMOIRS SECTION */}
      <section className="memoirs-section">
        <div className="memoirs-container">
          <div className="book-wrapper">
            <div className="book-cover">
              <div className="book-inner">
                <BookOpen className="book-icon" size={48} />
                <h3 className="book-title-text">The Majestic Bellmont Hotel</h3>
                <div className="book-divider"></div>
                <p className="book-author">By THE AUTHOR</p>
                <div className="book-footer">
                  <PenTool size={20} className="pen-icon" />
                </div>
              </div>
              <div className="memoirs-badge">MEMOIRS</div>
            </div>
          </div>

          <div className="memoirs-text">
            <h3 className="memoirs-title">
              THE <span className="memoirs-highlight">MEMOIRS</span>
            </h3>
            <p className="memoirs-description">
              The legendary pieces of a lost world, kindness, love, and unforgettable friendships.
              Each piece whispers the golden age of Torvonka.
            </p>
            <div className="memoirs-actions">
              <button
                className="memoirs-button"
                onClick={() => navigate('/memoirs')}
              >
                LIVE THE PAST!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;