import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Key, PhoneCall, ArrowRight, TrainFront, BookOpen, PenTool, Star, Hotel, ConciergeBell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // --- GENEL SAYFA GİRİŞİ ---
    gsap.fromTo(".home-container",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // İkonların süzülme animasyonu (Keys ve Wrapper için devam ediyor)
    gsap.to(".intro-float-icon, .main-icon-wrapper", {
      y: 15, // Hareket mesafesi biraz makul seviyeye çekildi (75 çok fazlaydı)
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });

    // --- ASANSÖR SİMÜLASYONU (FLOOR LOGIC) ---
    const floors = gsap.utils.toArray('.floor-number');
    const elevatorTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2 });

    // 1. Otel İkonunun Yükselmesi
    elevatorTl.to(".intro-main-hotel", {
      y: -150,
      duration: 10,
      ease: "power1.inOut"
    }, 0);

    // 2. Kat Numaralarının Sırayla Yanması
    floors.forEach((floor, i) => {
      // Sayı parlar
      elevatorTl.to(floor, {
        color: "#ffffff",
        opacity: 1,
        textShadow: "0 0 8px rgba(212, 175, 55, 0.8)",
        duration: 1
      }, i * (12 / floors.length));

      // Bir sonraki sayıya geçerken mevcut olan söner (sonuncu hariç yoyo'da zaten dönecek)
      if (i < floors.length - 1) {
        elevatorTl.to(floor, {
          color: "#d4af37",
          opacity: 0.5,
          textShadow: "none",
          duration: 1
        }, (i + 1) * (12 / floors.length));
      }
    });

    // --- MİNİMAL METİN ANİMASYONLARI ---
    gsap.utils.toArray(".home-page-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".home-desc-text").forEach(desc => {
      gsap.from(desc, {
        scrollTrigger: {
          trigger: desc,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power1.out"
      });
    });

    // --- BUTON ANİMASYONLARI ---
    const buttons = gsap.utils.toArray("button[class$='-button']");
    buttons.forEach(btn => {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top 95%",
        },
        y: 15,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out"
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className='home-container' style={{ opacity: 0 }}>
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-icon-stage">
            <div className="icon-group">
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>0</p>
              </div>
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>1</p>
              </div>
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>2</p>
              </div>

              <div className="main-icon-wrapper">
                <Hotel className="intro-main-hotel" size={80} />
                <ConciergeBell className="intro-bell" size={40} />
              </div>

              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>3</p>
              </div>
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>4</p>
              </div>
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>5</p>
              </div>
              <div className="key-floor-group">
                <Key className="intro-float-icon k-1" />
                <p className='floor-number'>6</p>
              </div>
            </div>
          </div>

          <div className="intro-content">
            <h1 className="intro-title home-page-title">
              THE HOTEL <span className="gold-text">MUSEUM</span>
            </h1>
            <div className="intro-line-wrapper">
              <span className="ornament-line"></span>
              <Star size={16} fill="#d4af37" />
              <span className="ornament-line"></span>
            </div>
            <p className="intro-lead home-desc-text">
              Welcome to the Republic of Torvonka. This museum is a curated homage
              to a vanishing era of elegance, the art of hospitality, and the
              whimsical beauty that resides in the heart of the Alps.
              It aims to reflect the spirit and atmosphere of that lost era by expressing the symbols of the time.
            </p>
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <section className="concierge-section">
        <div className="concierge-container">
          <div className="perfume-wrapper">
            <div className="perfume-bottle">
              <div className="perfume-inner">
                <Sparkles className="perfume-sparkle" size={32} />
                <h3 className="perfume-title home-page-title">L'Esprit d'Élégance</h3>
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
            <h3 className="concierge-title home-page-title">
              THE <span className="concierge-highlight">CONCIERGE</span>
            </h3>
            <p className="concierge-description home-desc-text">
              Monsieur Gaston, who lived during the hotel's brightest years, is a figure who continued to carry the faint lights of civilization even in the darkest times of humanity.</p>
            <div className="concierge-actions">
              <button className="concierge-button" onClick={() => navigate('/concierge')}>MEET GASTON</button>
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
                <h3 className="box-title home-page-title">MADEL'S</h3>
                <div className="box-divider"></div>
                <p className="box-subtitle">Pâtissier</p>
                <div className="box-product">Sérénité au Chocolat</div>
              </div>
              <div className="box-badge">FRESHLY BAKED</div>
            </div>
          </div>
          <div className="patisserie-text">
            <h3 className="patisserie-title home-page-title">
              THE <span className="patisserie-highlight">PATISSERIE</span>
            </h3>
            <p className="patisserie-description home-desc-text">
              Sérénité au Chocolat, offered in our legendary Madel's boxes, is Torvonka's sweetest secret. Each layer is a work of art, every bite a memory.
            </p>
            <button className="patisserie-button" onClick={() => navigate('/patisserie')}>EXPLORE MADEL'S</button>
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
                <p className="emblem-subtext">The Network</p>
              </div>
              <div className="floating-phone"><PhoneCall size={24} /></div>
              <div className="floating-key"><Key size={20} /></div>
            </div>
          </div>
          <div className="society-text">
            <h3 className="society-title home-page-title">
              THE <span className="society-highlight">SOCIETY</span>
            </h3>
            <p className="society-description home-desc-text">
              A secret network connecting Europe's most prestigious hotels.
              The Society of the Silent Locks is a chain of assistance that comes into play during the most challenging times.
              A single phone call can change everything.
            </p>
            <div className="society-actions">
              <button className="society-button" onClick={() => navigate('/society')}>JOIN THE SECRECY</button>
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
            <h3 className="transport-title home-page-title">
              THE <span className="transport-highlight">TRANSPORT</span>
            </h3>
            <p className="transport-description home-desc-text">
              Your journey to the snowy peaks is where comfort meets adventure. Travel to the heart of the Alps with Torvonka Express' luxurious carriages, our legendary funicular, and cable car.</p>
            <div className="transport-actions">
              <button className="transport-button" onClick={() => navigate('/transportation')}>HIT THE ROAD!</button>
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
                <Hotel className="book-illustration-icon" size={60} />
                <div className="book-title-area">
                  <span className="book-top-text">THE</span>
                  <h3 className="book-title home-page-title">MAJESTIC BELLMONT</h3>
                  <span className="book-bottom-text">HOTEL</span>
                </div>
                <div className="book-divider"></div>
                <p className="book-author">By THE AUTHOR</p>
                <div className="book-footer">
                  <PenTool size={18} className="pen-icon" />
                </div>
              </div>
              <div className="memoirs-badge">MEMOIRS</div>
            </div>
          </div>
          <div className="memoirs-text">
            <h3 className="memoirs-title home-page-title">
              THE <span className="memoirs-highlight">MEMOIRS</span>
            </h3>
            <p className="memoirs-description home-desc-text">
              The legendary pieces of a lost world, kindness, love, and unforgettable friendships.
              Each piece whispers the golden age of Torvonka.
            </p>
            <div className="memoirs-actions">
              <button className="memoirs-button" onClick={() => navigate('/memoirs')}>LIVE THE PAST!</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;