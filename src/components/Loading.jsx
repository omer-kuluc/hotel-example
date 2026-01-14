// Loading.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Yükleme bitince yukarı doğru kaybolma efekti (Perde açılması gibi)
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: onComplete // App.jsx'e bittiğini haber ver
        });
      }
    });

    // 1. Metinlerin gelişi
    tl.from('.loading-text-small', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from('.loading-text-large', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      .from('.loading-subtitle', {
        y: 10,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

    // 2. Loading Bar Dolumu
    tl.to(barRef.current, {
      width: '100%',
      duration: 2.5, // Yükleme süresini buradan ayarlayabilirsin
      ease: "power1.inOut"
    });

    // 3. Hafif bir bekleme
    tl.to({}, { duration: 1.5 });

  }, [onComplete]);

  return (
    <div className="loading-container" ref={containerRef}>
      {/* Siyah Köşeler */}
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      <div className="loading-content">
        <h2 className="loading-text-small">PLEASE WAIT WHILE WE</h2>
        <h1 className="loading-text-large">PREPARE YOUR STAY</h1>

        <div className="loading-subtitle-container">
          <p className="loading-subtitle">LÜTFEN ODANIZ HAZIRLANIRKEN BEKLEYİNİZ</p>
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