import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, BookOpen, PenTool, Key, Star, FileText, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Memoirs() {
  const containerRef = useRef(null);
  const bookRef = useRef(null); // Kitap referansı

  // --- SAYFA GİRİŞ ANİMASYONU ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power4.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- KİTAP HOVER ANİMASYONLARI (GSAP) ---
  const handleBookEnter = () => {
    gsap.to(bookRef.current, {
      rotationY: 0,
      rotate: 0,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleBookLeave = () => {
    gsap.to(bookRef.current, {
      rotationY: 0,
      rotate: 3, // Başlangıçtaki hafif eğiklik
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  };
  // ----------------------------------------

  useEffect(() => {
    // Hero Harf Animasyonu
    gsap.from('.memoirs-title-char', {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    // Hero Alt Metin Animasyonu
    gsap.from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      delay: 1,
      duration: 0.8,
      ease: 'power2.out'
    });

    // 1. Kitap Giriş Animasyonu (SMOOTH & OPTİMİZE EDİLDİ)
    gsap.fromTo(bookRef.current,
      {
        rotationY: 60, // 90 yerine 60 daha yumuşak görünür
        opacity: 0,
        z: -100 // Derinlikten gelsin
      },
      {
        scrollTrigger: {
          trigger: '.memoirs-book-section',
          start: 'top 65%',
        },
        rotationY: 0,
        z: 0,
        opacity: 1,
        duration: 2, // Süre uzatıldı, daha smooth
        ease: 'power4.out', // En yumuşak bitiş
      }
    );

    // 2. Job Application Animasyonu
    gsap.from('.job-paper', {
      scrollTrigger: {
        trigger: '.job-section',
        start: 'top 60%',
      },
      y: 50,
      rotation: 5,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 3. Tablo Animasyonu
    gsap.from('.painting-frame', {
      scrollTrigger: {
        trigger: '.art-section',
        start: 'top 60%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });

    gsap.from('.portrait-item', {
      scrollTrigger: {
        trigger: '.painting-frame',
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    // 4. Anahtar (Key) Animasyonu
    const tlKey = gsap.timeline({
      scrollTrigger: {
        trigger: '.key-section',
        start: 'top 65%',
      }
    });

    tlKey.from('.crossed-keys-wrapper', {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.5)'
    })
      .from('.key-star', {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out'
      }, "-=0.5");

  }, []);

  const titleText = "ZUBROWKA TALES";
  const words = titleText.split(" ");

  return (
    <div className='memoirs-page' ref={containerRef}>

      {/* --- HERO SECTION --- */}
      <section className="memoirs-hero">
        <div className="memoirs-hero-content">
          <div className="hero-ornament-top"></div>

          <h1 className="memoirs-title">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="title-word" style={{ display: 'inline-block', whiteSpace: 'nowrap', margin: '0 15px' }}>
                {word.split('').map((char, charIndex) => (
                  <span key={charIndex} className="memoirs-title-char" style={{ display: 'inline-block' }}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="hero-divider"></div>

          <div className="hero-subtitle">
            <span className="vol-text">VOL. I — 1932</span>
            <p className="hero-desc">"Bir otelden fazlası, kayıp bir zamanın hatırası."</p>
          </div>

          <div className="hero-ornament-bottom"></div>
        </div>
      </section>

      {/* --- 1. MEMOIRS BOOK SECTION --- */}
      <section className="memoirs-book-section">
        <div className="memoirs-container">
          <div className="book-wrapper">
            <div
              className="book-cover"
              ref={bookRef}
              onMouseEnter={handleBookEnter}
              onMouseLeave={handleBookLeave}
            >
              <div className="book-inner">
                <BookOpen className="book-icon" size={48} />
                <h3 className="book-title-text">The Grand Budapest Hotel</h3>
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
            <h3 className="section-title">
              THE <span className="highlight">BOOK</span>
            </h3>
            <p className="section-description">
              Years later, this story told comes to life with the memories of The Protege.
              A written seal of a lost world, love, and friendships.
              Each page whispers the golden age of Zubrowka and the Majestic Bellmont Hotel.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. JOB APPLICATION SECTION --- */}
      <section className="job-section">
        <div className="job-container">

          <div className="job-visual-wrapper">
            <div className="job-paper">
              <div className="paper-header">
                <FileText size={24} className="paper-icon" />
                <span>OFFICIAL APPLICATION</span>
              </div>
              <div className="paper-body">
                <div className="form-row">
                  <span className="form-label">POSITION:</span>
                  <span className="form-value typewriter">Lobby Boy</span>
                </div>
                <div className="form-row">
                  <span className="form-label">EXPERIENCE:</span>
                  <div className="stamp-box">
                    <span className="stamp-text">ZERO</span>
                  </div>
                </div>
                <div className="form-row">
                  <span className="form-label">EDUCATION:</span>
                  <div className="stamp-box">
                    <span className="stamp-text">ZERO</span>
                  </div>
                </div>
                <div className="form-row">
                  <span className="form-label">FAMILY:</span>
                  <div className="stamp-box">
                    <span className="stamp-text">ZERO</span>
                  </div>
                </div>
              </div>
              <div className="paper-footer">
                <span className="hired-stamp">HIRED</span>
              </div>
            </div>
          </div>

          <div className="job-text">
            <h3 className="section-title">
              THE <span className="highlight">CANDIDATE</span>
            </h3>
            <p className="section-description">
              A young man with nothing and a hotel with everything.
              What Gaston sought was not accomplishments on paper,
              but the sparkle of loyalty in the eyes. The Protege, contrary to its name, found everything with this hotel and gave it all to the hotel. </p>
            <div className="job-actions">
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Hired on the spot</span>
              </div>
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>A new beginning</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. ART SECTION --- */}
      <section className="art-section">
        <div className="art-container">

          <div className="art-visual-wrapper">
            <div className="painting-frame">
              <div className="painting-canvas">

                {/* Nesneler */}
                <div className="family-portrait">

                  {/* SOL ALT: GUSTAVE (Papyon) */}
                  <div className="portrait-item item-gustave">
                    <div className="gustave-tie">
                      <div className="tie-knot"></div>
                      <div className="tie-wing left"></div>
                      <div className="tie-wing right"></div>
                    </div>
                  </div>

                  {/* ORTA: ZERO (Şapka) */}
                  <div className="portrait-item item-zero">
                    <div className="zero-hat">
                      <div className="hat-text">LOBBY BOY</div>
                    </div>
                  </div>

                  {/* SAĞ ÜST: AGATHA (Kolye - Güncellendi) */}
                  <div className="portrait-item item-agatha">
                    <div className="agatha-necklace">
                      {/* Sütyen görünümü kalktı, tek zincir */}
                      <div className="necklace-chain"></div>
                      <div className="pendant-a">A</div>
                    </div>
                  </div>

                </div>

                <div className="painting-label">OBJECTS OF MEMORY</div>
              </div>
              <div className="frame-ornament"></div>
            </div>
          </div>

          <div className="art-text">
            <h3 className="section-title">
              THE <span className="highlight">PAINTING</span>
            </h3>
            <p className="section-description">
              This painting by Hendrik Van Janssen is a reflection of three individuals from the past.
              It was inspired by a photograph of ‘The Protégé’ and those who shaped his life.
              It mirrors what remains of those days and that photograph: a bowtie, a hat, and a necklace.
            </p>
            <div className="art-actions">
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Wrapped nicely</span>
              </div>
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Stolen quickly</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. KEY SECTION --- */}
      <section className="key-section">
        <div className="key-container">

          <div className="key-visual-wrapper">
            <div className="crossed-keys-badge">
              <div className="crossed-keys-wrapper">
                {/* Çapraz Anahtarlar */}
                <Key className="key-icon left-key" size={80} />
                <Key className="key-icon right-key" size={80} />
              </div>
              <div className="stars-wrapper">
                <Star className="key-star s1" size={16} fill="#d4af37" />
                <Star className="key-star s2" size={24} fill="#d4af37" />
                <Star className="key-star s3" size={16} fill="#d4af37" />
              </div>
            </div>
            <div className="key-label">THE KEY</div>
          </div>

          <div className="key-text">
            <h3 className="section-title">
              THE <span className="highlight">MISSION</span>
            </h3>
            <p className="section-description">
              The Key; <p>For some, it was the crest of a secret society.</p>
              <p>For another, a symbol of courage worn as a necklace.</p>
              <p>And for someone else, the only remaining bond to their loved ones.</p>
              The Key meant something different to everyone, yet they all chose to live through those meanings.
            </p>
          </div>

        </div>
      </section>

      {/* --- FOOTER (Güncellendi) --- */}
      <footer className="memoirs-footer">
        <div className="footer-content">
          <Heart size={16} color="#d4af37" className="footer-icon" />
          <p className="footer-text">
            "We are but fleeting guests in the grand lobby of history.
            May our stay be gracious, and our departure, impeccable."
          </p>
          <span className="footer-sign">— THE CONCIERGE</span>
        </div>
      </footer>

    </div>
  )
}