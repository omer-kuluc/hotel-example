import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ticket, Mountain } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Transportation = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power4.out" }
      );

      gsap.from('.trans-title-char', {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      const vehicleTexts = gsap.utils.toArray('.text-content');

      vehicleTexts.forEach((section) => {
        const title = section.querySelector('.vehicle-title');
        const desc = section.querySelector('.vehicle-desc');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });

        tl.from(title, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
          .from(desc, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          }, "-=0.5");
      });

      gsap.to('.train-wheel', {
        rotation: -360,
        repeat: -1,
        duration: 1.5,
        ease: 'linear'
      });

      gsap.fromTo('.train-composition',
        { x: '100%' },
        {
          x: '-150%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.train-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );

      let mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        let { isDesktop } = context.conditions;

        gsap.fromTo('.cable-cabin',
          {
            x: isDesktop ? '-100px' : '-50px',
            y: isDesktop ? '50px' : '30px'
          },
          {
            x: isDesktop ? '80vw' : '100vw',
            y: isDesktop ? '180px' : '120px',
            ease: 'none',
            scrollTrigger: {
              trigger: '.cable-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 2,
            }
          }
        );
      });

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

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleText = "TRANSIT OPTIONS";
  const words = titleText.split(" ");

  return (
    <div className='transportation-page' ref={containerRef}>

      {/* HERO SECTION */}
      <section className="trans-hero">
        <div className="hero-content">
          <div className="ticket-icon-wrapper">
            <Ticket size={48} color="#d4af37" />
          </div>
          <h1 className="trans-title">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="title-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: '0 10px' }}>
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="trans-title-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="divider-gold"></div>
          <p className="trans-subtitle">REPUBLIC OF TORVONKA</p>
        </div>
      </section>

      {/* 1. THE EXPRESS */}
      <section className="train-section">
        <div className="train-section-container">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">EXPRESS</span></h2>
            <p className="vehicle-desc">
              The railway between Vunzt and Bemelstad. Fogged windows and border controls.
              It is important that your documents are with you so that you can feel more comfortable.
            </p>
          </div>

          <div className="train-track-area">
            <div className="train-composition">
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
              <div className="wagon">
                <div className="wagon-body">
                  <div className="wagon-window"></div>
                  <div className="wagon-window"></div>
                  <div className="stripe-line"></div>
                  <span className="wagon-text">VB-01</span>
                </div>
                <div className="wheels-container">
                  <div className="train-wheel small"></div>
                  <div className="train-wheel small"></div>
                </div>
              </div>
              <div className="wagon">
                <div className="wagon-body">
                  <div className="wagon-window"></div>
                  <div className="wagon-window"></div>
                  <div className="stripe-line"></div>
                  <span className="wagon-text">VB-02</span>
                </div>
                <div className="wheels-container">
                  <div className="train-wheel small"></div>
                  <div className="train-wheel small"></div>
                </div>
              </div>
            </div>
            <div className="rail-track"></div>
          </div>
        </div>
      </section>

      {/* 2. THE CABLE CAR */}
      <section className="cable-section">
        <div className="cable-section-container">
          <div className="text-content center-text">
            <h2 className="vehicle-title">THE <span className="highlight">CABLE CAR</span></h2>
            <p className="vehicle-desc">
              The misty road to the observatory. A solitary cabin gliding on the crossed wires.
              During the journey, who you are may be asked over and over again.
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

      {/* 3. THE FUNICULAR */}
      <section className="funicular-section">
        <div className="funicularsection-container reverse-layout">
          <div className="text-content">
            <h2 className="vehicle-title">THE <span className="highlight">FUNICULAR</span></h2>
            <p className="vehicle-desc">
              A steep rail system climbing to the location of the hotel. An impressive journey
              experience accompanied by the hum of the wind and the creaking of the tracks.
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
                <div className="funi-logo">MB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="trans-footer">
        <p className='trans-note-text'>P.S : If you have dark and shady friends, you can take a motorcycle; if you're a member of a secret society, you can take a taxi; and if you're really desperate, you can even reach your destination by ski.</p>
      </div>
    </div>
  );
};

export default Transportation;