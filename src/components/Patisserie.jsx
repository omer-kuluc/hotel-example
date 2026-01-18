import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Gift, Truck, ChefHat, Heart, Utensils } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Patisserie() {
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
    // Başlık Animasyonu
    gsap.from('.hero-title-char', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: 'back.out(1.7)',
    });

    // Courtesan au Chocolat Katmanları (Aşağıdan yukarıya dizilme)
    gsap.from('.pastry-layer', {
      scrollTrigger: {
        trigger: '.courtesan-wrapper',
        start: 'top 70%',
      },
      y: -50,
      opacity: 0,
      stagger: 0.2, // Sırayla gelmesi için
      duration: 0.8,
      ease: 'bounce.out',
    });

    // Mendl's Kutusu Animasyonu
    gsap.from('.delivery-box', {
      scrollTrigger: {
        trigger: '.delivery-section',
        start: 'top 60%',
      },
      x: -100,
      rotation: -15,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
    });

  }, []);

  return (
    <div className="patisserie-page" ref={containerRef}>

      {/* HERO SECTION */}
      <section className="mendl-hero">
        <div className="hero-content">
          <div className="brand-logo">
            <ChefHat size={48} className="brand-icon" />
            <span className="est-text">EST. 1912</span>
          </div>
          <h1 className="mendl-title">
            {"MADEL'S".split('').map((char, index) => (
              <span key={index} className="hero-title-char">{char}</span>
            ))}
          </h1>
          <p className="mendl-subtitle">HERR MADEL'S GENIUS RECIPES</p>
          <div className="hero-decoration">
            <Star size={16} fill="#d4af37" />
            <div className="hero-line"></div>
            <Star size={16} fill="#d4af37" />
          </div>
        </div>
      </section>

      {/* THE COURTESAN AU CHOCOLAT SHOWCASE */}
      <section className="product-showcase">
        <div className="showcase-container">

          <div className="courtesan-wrapper">
            {/* CSS ile çizilmiş Courtesan au Chocolat */}
            <div className="courtesan-art">
              <div className="pastry-top-bean pastry-layer"></div>
              <div className="pastry-cream-top pastry-layer"></div>
              <div className="pastry-tier-small pastry-layer"></div>
              <div className="pastry-cream-mid pastry-layer"></div>
              <div className="pastry-tier-medium pastry-layer"></div>
              <div className="pastry-cream-bottom pastry-layer"></div>
              <div className="pastry-tier-large pastry-layer"></div>
              <div className="pastry-plate"></div>
            </div>
            <div className="price-tag">50 Tulpek</div>
          </div>

          <div className="product-details">
            <h2 className="product-title">Sérénité<br /><span className="highlight">au Chocolat</span></h2>
            <p className="product-desc">
              Three delicate pastry towers filled with caramel cream, covered in colorful glazes, and meticulously stacked.
              The most iconic flavor of Torvonka, crafted by Althea's expert hands.
            </p>
            <ul className="ingredients-list">
              <li><Utensils size={14} /> Lavender-infused Glaze</li>
              <li><Utensils size={14} /> Pistachio Cream</li>
              <li><Utensils size={14} /> Tender Choux Pastry</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVERY / AGATHA SECTION */}
      <section className="delivery-section">
        <div className="delivery-container">
          <div className="delivery-text-area">
            <h3 className="delivery-title">SPECIAL <span className="blue-highlight">DELIVERY</span></h3>
            <p className="delivery-text">
              To the prison or to the hotel's ballroom?
              Our famous pink boxes are sealed with blue ribbons.
              Delivered without ever being opened (unless there's a chisel inside, of course).
            </p>
            <div className="quote-box">
              <Truck size={18} style={{ marginRight: '8px' }} />
            </div>
          </div>

          <div className="box-visual-area">
            {/* CSS ile Mendl's Kutusu */}
            <div className="delivery-box">
              <div className="box-lid">
                <div className="ribbon-vertical"></div>
                <div className="ribbon-horizontal"></div>
                <div className="ribbon-bow">
                  <div className="bow-left"></div>
                  <div className="bow-right"></div>
                </div>
              </div>
              <div className="box-body">
                <span className="box-brand">MADEL'S</span>
                <div className="patisserie-box-badge"><Gift size={12} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="patisserie-footer">
        <Heart size={24} className="heart-icon" fill="#d4af37" />
        <p>Made with love by Althea</p>
      </div>

    </div>
  );
};

export default Patisserie;