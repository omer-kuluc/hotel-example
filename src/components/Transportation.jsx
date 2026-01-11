import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Key, Phone, PhoneCall, Bell, MapPin, Snowflake, Star, Radio } from 'lucide-react';


export default function Transportation() {
  useEffect(() => {

    // 3. The Getaway (Araba Sahnesi)
    gsap.from('.vintage-car-visual', {
      scrollTrigger: {
        trigger: '.getaway-section',
        start: 'top 60%',
      },
      scale: 0.8,
      y: 20,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Kar Tanesi Animasyonu
    gsap.to('.falling-snow', {
      y: '100vh',
      opacity: 0,
      duration: 'random(3, 6)',
      stagger: {
        amount: 2,
        from: "random"
      },
      repeat: -1,
      ease: "linear"
    });

  }, []);
  return (
    <div className='transportation-container'>

      {/* THE GETAWAY: ESCAPE VEHICLE */}
      <section className="getaway-section">
        {/* Kar Efekti */}
        <div className="snow-container">
          {[...Array(20)].map((_, i) => (
            <Snowflake
              key={i}
              className="falling-snow"
              size={Math.random() * 10 + 10}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="getaway-content">
          <div className="car-wrapper">
            {/* CSS ART: Vintage Taxi */}
            <div className="vintage-car-visual">
              <div className="headlight-beams"></div>

              <div className="taxi-roof">
                <div className="taxi-sign">TAXI</div>
              </div>

              <div className="taxi-body">
                <div className="windshield">
                  <div className="silhouette driver"></div> {/* Ivan */}
                  <div className="silhouette passenger-1"></div> {/* Gustave */}
                  <div className="silhouette passenger-2"></div> {/* Zero */}
                </div>
                <div className="grill-area">
                  <div className="grill-lines"></div>
                </div>
                <div className="lights">
                  <div className="headlight left"></div>
                  <div className="headlight right"></div>
                </div>
                <div className="bumper"></div>
                <div className="plate">IVAN-1</div>
              </div>

              <div className="tires">
                <div className="tire left-tire"></div>
                <div className="tire right-tire"></div>
              </div>
            </div>
          </div>

          <div className="getaway-text-area">
            <h3 className="section-title">THE <span className="highlight">GETAWAY</span></h3>
            <p className="section-desc">
              Karlı bir gece, eski bir taksi ve mutlak sadakat.
              M. Ivan göreve hazır.
            </p>
            <div className="quote-box">
              <p>"Take over, Monsieur Gustave."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
