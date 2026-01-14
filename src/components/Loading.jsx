// Loading.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  // GSAP Context temizliği için ref (React 18 Best Practice)
  const comp = useRef(null);

  useLayoutEffect(() => {
    // GSAP Context oluşturuyoruz
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Yükleme bitince yukarı doğru kaybolma
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: onComplete
          });
        }
      });

      // 1. Metinlerin gelişi (.to kullanıyoruz çünkü başlangıçlarını aşağıda style ile verdik)
      tl.to('.loading-text-small', {
        y: 0,           // Başlangıçta 20px aşağıdaydı, 0'a gelsin
        opacity: 1,     // Görünür olsun
        duration: 0.8,
        ease: "power3.out"
      })
        .to('.loading-text-large', {
          scale: 1,       // Başlangıçta 0.9'du, 1 olsun
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }, "-=0.4")
        .to('.loading-subtitle', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.6");

      // 2. Loading Bar Dolumu
      tl.to(barRef.current, {
        width: '100%',
        duration: 2.5,
        ease: "power1.inOut"
      });

      // 3. Hafif bir bekleme
      tl.to({}, { duration: 1 });

    }, comp); // Animasyonları bu component içine hapsediyoruz

    return () => ctx.revert(); // Component kalkarsa animasyonları temizle
  }, [onComplete]);

  return (
    <div className="loading-container" ref={containerRef}>
      {/* Siyah Köşeler */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      {/* ref={comp} ile kapsamı belirliyoruz */}
      <div className="loading-content" ref={comp}>

        {/* Başlangıçta görünmemeleri için style ekledik */}
        <h2
          className="loading-text-small"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          PLEASE WAIT WHILE WE
        </h2>

        <h1
          className="loading-text-large"
          style={{ opacity: 0, transform: 'scale(0.9)' }}
        >
          PREPARE YOUR STAY
        </h1>

        <div className="loading-subtitle-container">
          <p
            className="loading-subtitle"
            style={{ opacity: 0, transform: 'translateY(10px)' }}
          >
            LÜTFEN ODANIZ HAZIRLANIRKEN BEKLEYİNİZ
          </p>
        </div>

        {/* Loading Bar */}
        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill" ref={barRef}></div>
        </div>

        <p className="loading-footer">REPUBLIC OF ZUBROWKA</p>
      </div>
    </div>
  );
};

export default Loading;