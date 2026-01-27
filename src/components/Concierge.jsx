import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Star, Quote, Crown, Feather } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Concierge = () => {
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
    gsap.from('.gustave-title-char', {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    gsap.from('.gustave-suit-visual', {
      scrollTrigger: { trigger: '.profile-section', start: 'top 60%' },
      scale: 0.9, y: 30, opacity: 0, duration: 1.2, ease: 'power3.out',
    });

    gsap.from('.lobby-hat-visual', {
      scrollTrigger: { trigger: '.legacy-section', start: 'top 70%' },
      y: -50, rotation: -10, opacity: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)',
    });

    gsap.from('.poetry-visual', {
      scrollTrigger: { trigger: '.poetry-section', start: 'top 60%' },
      scale: 0.9, y: 30, opacity: 0, duration: 1.5, ease: 'power3.out',
    });

    gsap.utils.toArray(".concierge-page-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".concierge-desc").forEach(desc => {
      gsap.from(desc, {
        scrollTrigger: {
          trigger: desc,
          start: "top 92%",
          toggleActions: "play none none none"
        },
        y: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power1.out"
      });
    });

    ScrollTrigger.refresh();
  }, []);

  const titleText = "MONSIEUR GASTON";
  const words = titleText.split(" ");

  return (
    <div className="concierge-page" ref={containerRef}>

      {/* HERO SECTION */}
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
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="gustave-title-word" >
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="gustave-title-char" >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="hero-divider"></div>
          <p className="gustave-subtitle">
            "He keeps the secrets, he serves the guests, he secures the legacy."
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

      {/* PROFILE SECTION: THE INSTITUTION */}
      <section className="profile-section">
        <div className="profile-container">

          <div className="profile-visual-wrapper">
            <div className="gustave-suit-visual">
              <div className="suit-collar"></div>
              <div className="suit-shirt">
                <div className="bow-tie"></div>
              </div>
              <div className="suit-lapels">
                <div className="lapel left-lapel"></div>
                <div className="lapel right-lapel"></div>
              </div>
              <div className="suit-badge">
                <Key size={16} className="badge-key-1" color="#d4af37" />
                <Key size={16} className="badge-key-2" color="#d4af37" />
              </div>
              <div className="suit-buttons">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
              </div>
              <div className="pocket-square"></div>
            </div>
          </div>

          <div className="profile-text">
            <h3 className="profile-title concierge-page-title">
              THE <span className="highlight">INSTITUTION</span>
            </h3>
            <p className="profile-description concierge-desc">
              Mr. Gaston is not just the doorman of the Majestic Bellmont Hotel, but its very soul.
              With his impeccable attire, poetic speech, and unwavering discipline,
              he defends the last bastion of civilization in the midst of barbarism.
            </p>
            <div className="quote-block">
              <Quote size={20} className="quote-icon" />
              <p className='rudeness-quote concierge-desc'>"He sees rudeness as a sign of fear."</p>
            </div>
          </div>

        </div>
      </section>

      {/* THE LEGACY SECTION (Lobby Boy) */}
      <section className="legacy-section">
        <div className="legacy-container">

          <div className="legacy-visual-wrapper">
            <div className="lobby-hat-visual">
              <div className="hat-top"></div>
              <div className="hat-band">
                <span className="hat-text">THE PROTEGE</span>
              </div>
              <div className="hat-badge">
                <Crown size={12} color="#d4af37" />
              </div>
            </div>
          </div>

          <div className="legacy-text">
            <h3 className="legacy-title concierge-page-title">
              THE <span className="highlight">PROTÉGÉ</span>
            </h3>
            <p className="legacy-description concierge-desc">
              The loyal assistant and adventure partner of the Concierge.
              In the hotel, he remains always present yet never noticed.
              He understands what others despise and remembers it well.
            </p>
          </div>

        </div>
      </section>

      {/* POETRY & DINNER SECTION */}
      <section className="poetry-section">
        <div className="poetry-container">

          <div className="poetry-visual-wrapper">
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
            <h3 className="poetry-title concierge-page-title">
              THE <span className="highlight">ORATOR</span>
            </h3>
            <p className="poetry-description concierge-desc">
              Just before the soup is served, the dining room falls into silence.
              Monsieur Gaston crowns the evening meals with romantic poetry recitals.
              The verses, like the wine served, are old and precious.
            </p>
            <div className="poetry-actions">
              <div className="recital-time">
                <Feather size={16} color="#d4af37" />
                <p className='poetry-note concierge-desc'>"Some of his poems can have up to 46 stanzas."</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <div className="concierge-footer">
        <p>A member of</p>
        <h4 className="footer-society-text">THE SOCIETY OF THE SILENT LOCKS</h4>
      </div>

    </div>
  );
};

export default Concierge;