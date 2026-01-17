import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Star, Quote, Crown, Feather, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Concierge = () => {
  const containerRef = useRef(null);
  // --- SAYFA GİRİŞ ANİMASYONU ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Sayfa yüklenirken yumuşakça belirsin (Flaşlamayı önler)
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power4.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  // -----------------------------

  useEffect(() => {
    // 1. Hero Başlık Animasyonu
    gsap.from('.gustave-title-char', {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    // 2. Gustave Suit (Üniforma) Animasyonu
    gsap.from('.gustave-suit-visual', {
      scrollTrigger: {
        trigger: '.profile-section',
        start: 'top 60%',
      },
      scale: 0.9,
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 3. Lobby Boy Şapkası Girişi
    gsap.from('.lobby-hat-visual', {
      scrollTrigger: {
        trigger: '.legacy-section',
        start: 'top 70%',
      },
      y: -50,
      rotation: -10,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)',
    });

    // 4. Şiir Kürsüsü Animasyonu
    gsap.from('.poetry-visual', {
      scrollTrigger: {
        trigger: '.poetry-section',
        start: 'top 60%',
      },
      scale: 0.9,
      y: 30,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });

  }, []);

  // BAŞLIK DÜZELTME MANTIĞI:
  const titleText = "MONSIEUR GASTON";
  const words = titleText.split(" "); // Önce kelimelere böl ["MONSIEUR", "GASTON"]

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
            {/* Kelimeleri döndür */}
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="title-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: '0 10px' }}>
                {/* Her kelimenin harflerini döndür */}
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="gustave-title-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="hero-divider"></div>
          <p className="gustave-subtitle">
            "I keep the secrets, I serve the guests, I secure the legacy."
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

      {/* PROFILE SECTION: THE INSTITUTION (Yeni Eklenen Kısım) */}
      <section className="profile-section">
        <div className="profile-container">

          <div className="profile-visual-wrapper">
            {/* CSS Art: Gustave's Uniform */}
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
            <h3 className="profile-title">
              THE <span className="highlight">INSTITUTION</span>
            </h3>
            <p className="section-description">
              Mösyö Gustave, Grand Budapest Hotel'in sadece yöneticisi değil, ruhudur.
              Kusursuz giyimi, şiirsel konuşması ve sarsılmaz disipliniyle,
              barbarlığın ortasında medeniyetin son kalesini savunur.
            </p>
            <div className="quote-block">
              <Quote size={20} className="quote-icon" />
              <p>"Rudeness is merely the expression of fear."</p>
            </div>
          </div>

        </div>
      </section>

      {/* THE LEGACY SECTION (Lobby Boy) */}
      <section className="legacy-section">
        <div className="legacy-container">

          <div className="legacy-visual-wrapper">
            {/* CSS Art: Lobby Boy Hat */}
            <div className="lobby-hat-visual">
              <div className="hat-top"></div>
              <div className="hat-band">
                <span className="hat-text">LOBBY BOY</span>
              </div>
              <div className="hat-badge">
                <Crown size={12} color="#d4af37" />
              </div>
            </div>
          </div>

          <div className="legacy-text">
            <h3 className="legacy-title">
              THE <span className="highlight">PROTÉGÉ</span>
            </h3>
            <p className="section-description">
              "Sıfır mı? Ne garip bir isim." <br />
              Bir Concierge asla yalnız değildir. Zero Moustafa, Mösyö Gustave'ın
              en sadık dostu, varisi ve sağ koludur. Tecrübe sıfır olsa da, sadakat sonsuzdur.
            </p>
          </div>

        </div>
      </section>

      {/* POETRY & DINNER SECTION */}
      <section className="poetry-section">
        <div className="poetry-container">

          <div className="poetry-visual-wrapper">
            {/* CSS Art: Podium & Candle */}
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
            <h3 className="poetry-title">
              THE <span className="highlight">ORATOR</span>
            </h3>
            <p className="poetry-description">
              Çorba servisi yapılmadan hemen önce, salon sessizliğe bürünür.
              Mösyö Gustave, akşam yemeklerini romantik şiir resitalleriyle taçlandırır.
              Dizeler, tıpkı servis edilen şarap gibi eski ve kıymetlidir.
            </p>
            <div className="poetry-actions">
              <div className="recital-time">
                <Feather size={16} color="#d4af37" />
                <span>Tonight's Selection: "The Painting"</span>
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