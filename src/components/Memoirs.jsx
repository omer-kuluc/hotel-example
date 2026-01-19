import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, CheckCircle, BookOpen, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Memoirs() {
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
    // 1. Tablo Animasyonu
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

    // 2. Kitap Animasyonu (Yeni)
    gsap.from('.book-cover', {
      scrollTrigger: {
        trigger: '.memoirs-book-section',
        start: 'top 60%',
      },
      rotationY: 90, // Kitap açılıyormuş gibi
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    // 3. Parfüm Animasyonu
    // (Manuel tetikleniyor, otomatik animasyon gerekirse buraya eklenebilir)

  }, []);

  return (
    <div className='memoirs-page' ref={containerRef}>

      {/* 2. THE MEMOIRS BOOK SECTION (Yeni Eklenen) */}
      <section className="memoirs-book-section">
        <div className="memoirs-container">
          <div className="book-wrapper">
            {/* Stylized Book Cover Visual */}
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
              THE <span className="highlight">MEMOIRS</span>
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
      {/* 1. ART SECTION (Boy with his Family) */}
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