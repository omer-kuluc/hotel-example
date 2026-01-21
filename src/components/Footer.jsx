import React from 'react';
import { Key } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gb-footer">
      <div className="gb-footer-content">

        {/* Dekoratif Üst Kısım */}
        <div className="footer-decoration">
          <div className="line"></div>
          <div className="icon-wrapper">
            <Key size={18} className="footer-icon" />
          </div>
          <div className="line"></div>
        </div>

        {/* Ana Metin */}
        <div className="footer-text-group">
          <p className="footer-disclaimer">
            This project is a non-commercial tribute, lovingly inspired by
          </p>
          <h4 className="footer-film-title">
            Wes Anderson’s 2014 Masterpiece<br />
            <span className="highlight">THE GRAND BUDAPEST HOTEL</span>
          </h4>
        </div>

        {/* Alt Bilgi (Credits) */}
        <div className="footer-credits">
          <span>Not affiliated with Searchlight Pictures</span>
          <span className="dot">•</span>
          <span>Educational Purpose Only</span>
        </div>

      </div>
    </footer>
  );
}