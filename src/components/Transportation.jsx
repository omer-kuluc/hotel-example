import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ticket, Mountain, Gauge, Bike, Wind, TramFront } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Transportation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Hero Başlık
    gsap.from('.trans-title-char', {
      y: 50, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.out(1.7)',
    });

    // 2. TREN ANİMASYONU (Daha stabil scroll)
    const trainTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.train-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Scroll ile akıcı hareket
      }
    });

    trainTl.fromTo('.train-composition',
      { x: '100%' },
      { x: '-150%', ease: 'none' }
    );

    // Tekerlekler sürekli döner
    gsap.to('.train-wheel', {
      rotation: -360,
      repeat: -1,
      duration: 1.5,
      ease: 'linear'
    });

    // 3. TELEFERİK (Çapraz teller üzerinde)
    gsap.fromTo('.cable-cabin',
      { x: '-50px', y: '20px' },
      {
        x: '80vw',
        y: '-50px',
        ease: 'none',
        scrollTrigger: {
          trigger: '.cable-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      }
    );

    // 4. FÜNİKÜLER (Dik tırmanış)
    gsap.fromTo('.funicular-car',
      { y: '200px', x: '-100px' },
      {
        y: '-100px',
        x: '50px',
        ease: 'none',
        scrollTrigger: {
          trigger: '.funicular-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );

    // 5. İKONLAR (Moto & Sled)
    gsap.from('.vehicle-badge', {
      scrollTrigger: {
        trigger: '.chase-section',
        start: 'top 70%',
      },
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
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
              Lutz ve Nebelsbad arasındaki demir yolu. Askeri yeşil vagonlar,
              buğulu camlar ve sınır kontrolleri.
            </p>
          </div>

          <div className="train-track-area">
            {/* Tren Grubu */}
            <div className="train-composition">

              {/* LOKOMOTİF */}
              <div className="locomotive">
                <div className="chimney"><div className="smoke"></div></div>
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
                  <span className="wagon-text">ZB-01</span>
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
                  <span className="wagon-text">ZB-02</span>
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

      {/* 2. THE CABLE CAR (Teleferik - Çapraz Teller) */}
      <section className="cable-section">
        <div className="section-container">
          <div className="text-content center-text">
            <h2 className="vehicle-title">THE <span className="highlight">CABLE CAR</span></h2>
            <p className="vehicle-desc">
              Gözlemevi'ne giden sisli yol. Çapraz tellerin üzerinde süzülen yalnız bir kabin.
            </p>
          </div>

          <div className="cable-visual-area">
            <div className="cables">
              <div className="wire main-wire"></div>
              <div className="wire cross-wire"></div>
            </div>

            <div className="cable-cabin">
              <div className="hanger"></div>
              <div className="cabin-body">
                <div className="cabin-window"></div>
                <div className="cabin-stripe"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FUNICULAR (Füniküler - Dik Ray) */}
      <section className="funicular-section">
        <div className="section-container reverse-layout">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">FUNICULAR</span></h2>
            <p className="vehicle-desc">
              Otelin kapısına tırmanan dik raylı sistem. Mavi vagonlar,
              karlı zirvelere meydan okur.
            </p>
            <div className="badge-row">
              <Mountain size={16} color="#d4af37" /> <span>Steep Incline</span>
            </div>
          </div>

          <div className="funicular-visual-area">
            <div className="incline-track">
              <div className="rail-ties"></div>
              <div className="rail-ties"></div>
              <div className="rail-ties"></div>
              <div className="rail-ties"></div>
              <div className="rail-ties"></div>
            </div>
            <div className="funicular-car">
              <div className="funi-body">
                <div className="funi-window"></div>
                <div className="funi-window"></div>
                <div className="funi-logo">GB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PURSUIT (Moto & Sled - High Visibility Icons) */}
      <section className="chase-section">
        <div className="section-container">
          <div className="text-content center-text">
            <h2 className="vehicle-title">THE <span className="highlight">PURSUIT</span></h2>
            <p className="vehicle-desc">
              Hız ve gizlilik. Jopling'in motosikleti ve karlı tepelerden inen o meşhur kızak.
            </p>
          </div>

          <div className="badges-wrapper">
            {/* Motorcycle Badge */}
            <div className="vehicle-badge moto-badge">
              <div className="badge-circle">
                <svg className="motorcycle-svg" viewBox="0 0 200 120" fill="none">
                  {/* Motorcycle Body */}
                  <rect x="60" y="45" width="80" height="25" rx="5" fill="#d4af37" stroke="#2d1b33" strokeWidth="2" />
                  {/* Front Wheel */}
                  <circle cx="40" cy="85" r="20" fill="none" stroke="#d4af37" strokeWidth="4" />
                  <circle cx="40" cy="85" r="12" fill="none" stroke="#d4af37" strokeWidth="2" />
                  {/* Rear Wheel */}
                  <circle cx="160" cy="85" r="20" fill="none" stroke="#d4af37" strokeWidth="4" />
                  <circle cx="160" cy="85" r="12" fill="none" stroke="#d4af37" strokeWidth="2" />
                  {/* Handlebars */}
                  <path d="M20 45 L30 35 L50 35" stroke="#d4af37" strokeWidth="3" fill="none" />
                  {/* Seat */}
                  <ellipse cx="120" cy="42" rx="25" ry="8" fill="#d4af37" />
                  {/* Frame */}
                  <path d="M60 55 L40 85 M60 65 L160 85 M100 55 L160 85" stroke="#d4af37" strokeWidth="3" />
                  {/* Exhaust */}
                  <rect x="140" y="65" width="30" height="6" rx="3" fill="#d4af37" />
                </svg>
              </div>
              <span className="badge-label">JOPLING'S MOTO</span>
            </div>

            {/* Sled Badge */}
            <div className="vehicle-badge sled-badge">
              <div className="badge-circle">
                <svg className="sled-svg" viewBox="0 0 200 120" fill="none">
                  {/* Sled Base */}
                  <ellipse cx="100" cy="85" rx="80" ry="12" fill="#d4af37" stroke="#2d1b33" strokeWidth="2" />
                  {/* Sled Runners */}
                  <rect x="30" y="90" width="140" height="4" rx="2" fill="#d4af37" />
                  <rect x="25" y="88" width="8" height="8" rx="4" fill="#d4af37" />
                  <rect x="167" y="88" width="8" height="8" rx="4" fill="#d4af37" />
                  {/* Sled Body */}
                  <path d="M40 85 Q40 55 60 45 L140 45 Q160 55 160 85" fill="#d4af37" stroke="#2d1b33" strokeWidth="2" />
                  {/* Handle/Rope */}
                  <path d="M60 45 Q50 35 40 25 M80 45 Q70 35 60 25 M100 45 Q90 35 80 25" stroke="#d4af37" strokeWidth="3" fill="none" />
                  {/* Decorative Lines */}
                  <path d="M50 65 L150 65 M55 75 L145 75" stroke="#2d1b33" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
              <span className="badge-label">THE SLED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="trans-footer">
        <p>TRANSIT AUTHORITY OF ZUBROWKA</p>
      </div>
    </div>
  );
};

export default Transportation;