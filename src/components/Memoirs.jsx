import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle, BookOpen, PenTool, Key, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Memoirs() {
  const containerRef = useRef(null);

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
  // -----------------------------

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

    // 1. Kitap Animasyonu
    gsap.from('.book-cover', {
      scrollTrigger: {
        trigger: '.memoirs-book-section',
        start: 'top 60%',
      },
      rotationY: 90,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    // 2. ANAHTAR (KEY) ANİMASYONU (YENİ)
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

  }, []);

  const titleText = "ZUBROWKA TALES";
  const words = titleText.split(" ");

  return (
    <div className='memoirs-page' ref={containerRef}>

      {/* --- HERO SECTION (Güncellendi) --- */}
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

      {/* --- MEMOIRS BOOK SECTION --- */}
      <section className="memoirs-book-section">
        <div className="memoirs-container">
          <div className="book-wrapper">
            <div className="book-cover">
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
              Yıllar sonra anlatılan bu hikaye, Zero Moustafa'nın anılarıyla hayat buluyor.
              Kaybolmuş bir dünyanın, nezaketin ve unutulmaz dostlukların efsanevi dökümü.
              Her sayfa, Zubrowka'nın altın çağını fısıldıyor.
            </p>
            <div className="memoirs-actions">
              <button className="memoirs-button">
                ANILARI KEŞFEDİN
              </button>
              <p className="memoirs-quote">"To be written with a steady hand."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY SECTION (YENİ EKLENEN KISIM) --- */}
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
            <div className="key-label">SOCIETY OF THE CROSSED KEYS</div>
          </div>

          <div className="key-text">
            <h3 className="section-title">
              THE <span className="highlight">KEYS</span>
            </h3>
            <p className="section-description">
              M. Gustave için anahtarlar sadece kapıları değil, kalpleri de açardı.
              Bu sembol, "Çapraz Anahtarlar Cemiyeti"nin sarsılmaz sadakatini ve
              Zero'ya devredilen o büyük sorumluluğu temsil eder.
              Gerçek hizmet, görünmez bağlarla kurulur.
            </p>
            <div className="key-actions">
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Ultimate Discretion</span>
              </div>
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Unwavering Loyalty</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ART SECTION --- */}
      <section className="art-section">
        <div className="art-container">

          <div className="art-visual-wrapper">
            <div className="painting-frame">
              <div className="painting-canvas">
                {/* Aile Portresi */}
                <div className="family-portrait">
                  <div className="portrait-item item-gustave">
                    <div className="gustave-tie">
                      <div className="tie-knot"></div>
                      <div className="tie-wing left"></div>
                      <div className="tie-wing right"></div>
                    </div>
                    <span className="item-label">THE MENTOR</span>
                  </div>

                  <div className="portrait-item item-zero">
                    <div className="zero-hat">
                      <div className="hat-text">LOBBY BOY</div>
                    </div>
                    <span className="item-label">THE PROTÉGÉ</span>
                  </div>

                  <div className="portrait-item item-agatha">
                    <div className="agatha-necklace">
                      <div className="chain-left"></div>
                      <div className="chain-right"></div>
                      <div className="pendant-m">M</div>
                    </div>
                    <span className="item-label">THE LOVE</span>
                  </div>
                </div>
                <div className="painting-label">PORTRAIT OF A FAMILY</div>
              </div>
              <div className="frame-ornament"></div>
            </div>
          </div>

          <div className="art-text">
            <h3 className="section-title">
              THE <span className="highlight">INHERITANCE</span>
            </h3>
            <p className="section-description">
              Madame D.'nin vasiyeti artık sadece bir elma değil.
              Tablo, Zero'nun seçilmiş ailesini resmediyor:
              Gustave'ın zarafeti, Zero'nun sadakati ve Agatha'nın masumiyeti.
              Gerçek miras, kurulan bu bağlardır.
            </p>
            <div className="art-actions">
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Priceless bond</span>
              </div>
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Saved forever</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}