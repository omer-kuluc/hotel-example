// Home.jsx
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Key, PhoneCall, ArrowRight, TrainFront, BookOpen, PenTool } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <div className='home-container'>
      {/* Concierge Section (Yeni Eklenen) */}
      <section className="concierge-section">
        <div className="concierge-container">
          <div className="perfume-wrapper">
            <div className="perfume-bottle">
              <div className="perfume-inner">
                <Sparkles className="perfume-sparkle" size={32} />
                <h3 className="perfume-title">L'Air de Panache</h3>
                <div className="perfume-divider"></div>
                <p className="perfume-subtitle">The Signature Scent of M. Gustave</p>
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
              "Bir otel sadece bir binadan ibaret değildir." Monsieur Gustave H.,
              Society of the Crossed Keys üyesi ve otelin sarsılmaz ruhudur.
              Onun disiplini, her bir misafire kraliyet ailesindenmiş gibi hissettirir.
            </p>
            <div className="concierge-actions">
              <button className="concierge-button">GUSTAVE İLE TANIŞIN</button>
              <p className="concierge-quote">"L'Air de Panache'ı asla eksik etmeyin."</p>
            </div>
          </div>
        </div>
      </section>
      {/* Patisserie Section (Mevcut) */}
      <section className="patisserie-section">
        <div className="patisserie-container">
          <div className="patisserie-box-wrapper">
            <div className="mendls-box">
              <div className="box-content">
                <h3 className="box-title">MENDL'S</h3>
                <div className="box-divider"></div>
                <p className="box-subtitle">Pâtissier</p>
                <div className="box-product">Courtesan au Chocolat</div>
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
              Zubrowka'nın en tatlı sırrıdır. Her katman bir sanat eseri,
              her ısırık bir anıdır.
            </p>
            <button className="patisserie-button">SİPARİŞ VERİN</button>
          </div>
        </div>
      </section>
      {/* SOCIETY OF THE CROSSED KEYS SECTION */}
      <section className="society-section">
        <div className="society-container">
          <div className="society-visual-wrapper">
            {/* "The Calling Tree" Dairesel Görsel */}
            <div className="emblem-container">
              {/* Dönen Dış Halkalar */}
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

              {/* Dekoratif Hareketli Elementler */}
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
              <button className="society-button">
                CEMİYETE KATILIN
              </button>
              <p className="society-quote">"Daima hizmetinizde, gizlilik esastır."</p>
            </div>
          </div>
        </div>
      </section>
      {/* TRANSPORTATION SECTION */}
      <section className="transport-section">
        <div className="transport-container">
          <div className="ticket-wrapper">
            {/* Golden Ticket Visual */}
            <div className="golden-ticket">
              <div className="ticket-inner">
                <div className="ticket-header">
                  ZUBROWKA EXPRESS
                </div>
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
              Zubrowka Express'in lüks vagonları ve efsanevi fünikülerimiz ile Alp'lerin kalbine seyahat edin.
            </p>
            <div className="transport-actions">
              <button className="transport-button">
                BİLETİNİZİ AYIRTIN
              </button>
              <p className="transport-quote">"First Class accommodations, mandatory."</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMOIRS SECTION */}
      <section className="memoirs-section">
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
            <h3 className="memoirs-title">
              THE <span className="memoirs-highlight">MEMOIRS</span>
            </h3>
            <p className="memoirs-description">
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
    </div>
  );
}

export default Home;

