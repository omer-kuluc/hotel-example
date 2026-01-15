import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Key, PhoneCall, ArrowRight, TrainFront, BookOpen, PenTool } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    // --- YENİ EKLENEN KISIM: HOME SAYFA GİRİŞ ANİMASYONU ---
    // Tüm konteynerin yumuşakça belirmesi
    gsap.fromTo(".home-container",
      { opacity: 0, scale: 0.98 }, // Hafif küçük ve görünmez başla
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.1 // Header ile çakışmaması için çok kısa bir gecikme
      }
    );

    // ScrollTrigger'ların doğru hesaplanması için refresh
    ScrollTrigger.refresh();
  }, []);

  return (
    // 'home-container' animasyonun uygulanacağı ana kapsayıcıdır
    <div className='home-container' style={{ opacity: 0 }}> {/* Başlangıçta gizli olsun diye inline style */}

      {/* Concierge Section */}
      <section className="concierge-section">
        <div className="concierge-container">
          <div className="perfume-wrapper">
            <div className="perfume-bottle">
              <div className="perfume-inner">
                <Sparkles className="perfume-sparkle" size={32} />
                <h3 className="perfume-title">L'Esprit d'Élégance</h3>
                <div className="perfume-divider"></div>
                <p className="perfume-subtitle">The Signature Scent of M. Gaston</p>
                <div className="perfume-keys">
                  <Key size={24} className="key-icon" />
                  <Key size={24} className="key-icon rotate-90" />
                </div>
              </div>
              <div className="premium-tag">PREMIUM</div>
            </div>
          </div>

          <div className="concierge-text">
            <h3 className="concierge-title">
              THE <span className="concierge-highlight">CONCIERGE</span>
            </h3>
            <p className="concierge-description">
              Monsieur Gaston, who lived during the hotel's brightest years, is a figure who continued to carry the faint lights of civilization even in the darkest times of humanity.</p>
            <div className="concierge-actions">
              <button className="concierge-button">MEET GASTON</button>
              <p className="concierge-quote">"Never leave out L'Esprit d'Élégance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patisserie Section */}
      <section className="patisserie-section">
        <div className="patisserie-container">
          <div className="patisserie-box-wrapper">
            <div className="mendls-box">
              <div className="box-content">
                <h3 className="box-title">MADEL</h3>
                <div className="box-divider"></div>
                <p className="box-subtitle">Pâtissier</p>
                <div className="box-product">Sérénité au Chocolat</div>
              </div>
              <div className="box-badge">FRESHLY BAKED</div>
            </div>
          </div>

          <div className="patisserie-text">
            <h3 className="patisserie-title">
              THE <span className="patisserie-highlight">PATISSERIE</span>
            </h3>
            <p className="patisserie-description">
              Efsanevi Mendl's kutularımızda sunulan Courtesan au Chocolat,
              Torvonka'nın en tatlı sırrıdır. Her katman bir sanat eseri,
              her ısırık bir anıdır.
            </p>
            <button className="patisserie-button">SİPARİŞ VERİN</button>
          </div>
        </div>
      </section>

      {/* SOCIETY SECTION */}
      <section className="society-section">
        <div className="society-container">
          <div className="society-visual-wrapper">
            <div className="emblem-container">
              <div className="orbit-outer"></div>
              <div className="orbit-inner"></div>
              <div className="emblem-core">
                <div className="emblem-keys">
                  <Key size={40} className="key-left" />
                  <Key size={40} className="key-right" />
                </div>
                <div className="emblem-divider"></div>
                <p className="emblem-text">SOCIETY</p>
                <p className="emblem-subtext">The Calling Tree</p>
              </div>
              <div className="floating-phone"><PhoneCall size={24} /></div>
              <div className="floating-key"><Key size={20} /></div>
            </div>
          </div>

          <div className="society-text">
            <h3 className="society-title">
              THE <span className="society-highlight">SOCIETY</span>
            </h3>
            <p className="society-description">
              Avrupa'nın en seçkin otellerini birbirine bağlayan gizli bir ağ.
              Society of the Crossed Keys, en zor anlarda devreye giren bir yardımlaşma zinciridir.
              Bir telefonla dünyalar yerinden oynar.
            </p>
            <div className="society-actions">
              <button className="society-button">CEMİYETE KATILIN</button>
              <p className="society-quote">"Daima hizmetinizde, gizlilik esastır."</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORTATION SECTION */}
      <section className="transport-section">
        <div className="transport-container">
          <div className="ticket-wrapper">
            <div className="golden-ticket">
              <div className="ticket-inner">
                <div className="ticket-header">TORVONKA EXPRESS</div>
                <div className="ticket-route">
                  <span>LUTZ</span> <ArrowRight size={14} /> <span>NEBELSBAD</span>
                </div>
                <div className="ticket-icon-top"><TrainFront size={16} /></div>
                <div className="ticket-date">1932</div>
              </div>
            </div>
          </div>

          <div className="transport-text">
            <h3 className="transport-title">
              THE <span className="transport-highlight">TRANSPORT</span>
            </h3>
            <p className="transport-description">
              Karlı zirvelere giden yolculuğunuz, konforun ve maceranın birleştiği noktadır.
              Torvonka Express'in lüks vagonları ve efsanevi fünikülerimiz ile Alp'lerin kalbine seyahat edin.
            </p>
            <div className="transport-actions">
              <button className="transport-button">BİLETİNİZİ AYIRTIN</button>
              <p className="transport-quote">"First Class accommodations, mandatory."</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMOIRS SECTION */}
      <section className="memoirs-section">
        <div className="memoirs-container">
          <div className="book-wrapper">
            <div className="book-cover">
              <div className="book-inner">
                <BookOpen className="book-icon" size={48} />
                <h3 className="book-title-text">The Majestic Bellmont Hotel</h3>
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
            <h3 className="memoirs-title">
              THE <span className="memoirs-highlight">MEMOIRS</span>
            </h3>
            <p className="memoirs-description">
              Yıllar sonra anlatılan bu hikaye, Zero Moustafa'nın anılarıyla hayat buluyor.
              Kaybolmuş bir dünyanın, nezaketin ve unutulmaz dostlukların efsanevi dökümü.
              Her sayfa, Torvonka'nın altın çağını fısıldıyor.
            </p>
            <div className="memoirs-actions">
              <button className="memoirs-button">ANILARI KEŞFEDİN</button>
              <p className="memoirs-quote">"To be written with a steady hand."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;