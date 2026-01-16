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

  }, []);

  const titleText = "TRANSIT OPTIONS";
  const words = titleText.split(" "); // Önce kelimelere böl ["MONSIEUR", "GASTON"]

  return (
    <div className='transportation-page' ref={containerRef}>

      {/* HERO SECTION */}
      <section className="trans-hero">
        <div className="hero-content">
          <div className="ticket-icon-wrapper">
            <Ticket size={48} color="#d4af37" />
          </div>
          <h1 className="trans-title">
            {/* Kelimeleri döndür */}
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="title-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: '0 10px' }}>
                {/* Her kelimenin harflerini döndür */}
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="trans-title-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </span>
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




      {/* FOOTER */}
      <div className="trans-footer">
        <p>TRANSIT AUTHORITY OF ZUBROWKA</p>
      </div>
    </div>
  );
};

export default Transportation;