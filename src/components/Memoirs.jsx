import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { Key, Star, Quote, Crown, SprayCan, ScrollText, CheckCircle } from 'lucide-react';

export default function Memoirs() {


  useEffect(() => {
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
  }, []);

  return (
    <div className='memoirs-inner-container'>
      {/* ART SECTION (Boy with Apple) */}
      <section className="art-section">
        <div className="art-container">

          <div className="art-visual-wrapper">
            {/* CSS Art: Boy with Apple (Frame & Canvas) */}
            <div className="painting-frame">
              <div className="painting-canvas">
                <div className="apple-shape"></div>
                <div className="boy-silhouette"></div>
                <div className="painting-label">BOY WITH APPLE</div>
              </div>
              <div className="frame-ornament"></div>
            </div>
          </div>

          <div className="art-text">
            <h3 className="section-title">
              THE <span className="highlight">INHERITANCE</span>
            </h3>
            <p className="section-description">
              Madame D.'nin vasiyeti, paha biçilemez bir Rönesans tablosu.
              "Boy with Apple". Johannes Van Hoytl the Younger tarafından yapıldı.
              Bu tablo için savaşlar çıkar, aileler bölünür.
            </p>
            <div className="art-actions">
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Wrapped nicely</span>
              </div>
              <div className="check-item">
                <CheckCircle size={16} color="#d4af37" /> <span>Stolen quietly</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
