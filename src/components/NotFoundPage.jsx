import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';

const NotFoundPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.nf-icon', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      });

      gsap.from('.nf-title', {
        scale: 0.8,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.nf-text p', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.6,
        duration: 0.8,
        ease: 'power2.out'
      });

      gsap.from('.nf-button', {
        y: 20,
        opacity: 0,
        delay: 1.2,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="not-found-container" ref={containerRef}>
      <div className="not-found-card">
        <div className="nf-accent-top">
          <div className="nf-line"></div>
          <SearchX className="nf-icon" size={40} />
          <div className="nf-line"></div>
        </div>

        <h1 className="nf-title">404</h1>

        <div className="nf-text">
          <p>
            The <strong>memoirs</strong> option in this museum represents things that have happened in the past,
            are lost, and can no longer be found...
          </p>
          <p className="nf-italic">
            Just like the thing you are searching for : )
          </p>
          <p>Please click on one of the links in the menu.</p>
        </div>

        <div className="nf-accent-bottom">
          <div className="nf-line"></div>
          <div className="nf-dot"></div>
          <div className="nf-line"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;