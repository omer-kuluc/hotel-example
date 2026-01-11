import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ScrollTrigger import edilmeli
import { Quote, CheckCircle, SprayCan } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Memoirs() {
  const [sprayed, setSprayed] = useState(false);

  // Parfüm sıkma efekti
  const handleSpray = () => {
    setSprayed(true);
    gsap.fromTo(".spray-mist",
      { opacity: 0, scale: 0.5, y: 10 },
      { opacity: 0.8, scale: 1.5, y: -50, duration: 1, ease: "power2.out", onComplete: () => setSprayed(false) }
    );
  };

  useEffect(() => {
    // Tablo Çerçevesi Animasyonu
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

    // Portre Öğeleri Animasyonu (Sırayla gelir)
    gsap.from('.portrait-item', {
      scrollTrigger: {
        trigger: '.painting-frame',
        start: 'top 70%',
      },
      y: 20,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'back.out(1.7)',
    });

  }, []);

  return (
    <div className='memoirs-inner-container'>

      {/* ART SECTION (Boy with his Family) */}
      <section className="art-section">
        <div className="art-container">

          <div className="art-visual-wrapper">
            {/* CSS Art: Boy with his Family (Frame & Canvas) */}
            <div className="painting-frame">
              <div className="painting-canvas">

                <div className="family-portrait">
                  {/* Zero: Lobby Boy Hat */}
                  <div className="portrait-item zero-hat">
                    <div className="hat-text">LOBBY BOY</div>
                  </div>

                  {/* Gustave: Purple Bow Tie */}
                  <div className="portrait-item gustave-tie">
                    <div className="tie-knot"></div>
                    <div className="tie-wing left"></div>
                    <div className="tie-wing right"></div>
                  </div>

                  {/* Agatha: Necklace */}
                  <div className="portrait-item agatha-necklace">
                    <div className="chain-left"></div>
                    <div className="chain-right"></div>
                    <div className="pendant-m">M</div>
                  </div>
                </div>

                <div className="painting-label">BOY WITH HIS FAMILY</div>
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

      {/* PHILOSOPHY SECTION (Perfume) */}
      <section className="philosophy-section">
        <div className="philosophy-container">

          <div className="philosophy-visual-wrapper">
            <div className="panache-bottle-container" onClick={handleSpray}>
              <div className="bottle-cap"></div>
              <div className="bottle-neck"></div>
              <div className="bottle-body">
                <div className="bottle-label">
                  <span>L'AIR</span>
                  <span className="tiny">de</span>
                  <span>PANACHE</span>
                </div>
                <div className="bottle-liquid"></div>
              </div>
              <div className="spray-mist"></div>
              <div className="click-hint">(Click to Spray)</div>
            </div>
          </div>

          <div className="philosophy-text">
            <h3 className="section-title">
              THE <span className="highlight">PANACHE</span>
            </h3>
            <p className="section-description">
              "Burası bir zamanlar insanlık olarak bilinen o barbar mezbahasında,
              hâlâ medeniyetin cılız parıltılarını görebildiğiniz yerdir."
              Mösyö Gustave, en zor anlarda bile L'Air de Panache kokusundan ödün vermez.
            </p>
            <div className="quote-block">
              <Quote size={20} className="quote-icon" />
              <p>"Rudeness is merely the expression of fear."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}