// Loading.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ onComplete }) => {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.set('.loading-text-small', { y: 20, opacity: 0 });
      gsap.set('.loading-text-large', { scale: 0.9, opacity: 0 });
      gsap.set('.loading-subtitle', { y: 10, opacity: 0 });
      gsap.set(barRef.current, { width: '0%' });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: onComplete
          });
        }
      });

      tl.to('.loading-text-small', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3
      })
        .to('.loading-text-large', {
          scale: 1,
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

      tl.to(barRef.current, {
        width: '100%',
        duration: 2.5,
        ease: "power1.inOut"
      });

      tl.to({}, { duration: 0.5 });

    }, comp);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="loading-container" ref={containerRef}>
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      <div className="loading-content" ref={comp}>
        <h2 className="loading-text-small" style={{ opacity: 0 }}>
          WHETHER YOUR SCREEN SIZE
        </h2>

        <h1 className="loading-text-large" style={{ opacity: 0 }}>
          16:9 OR NOT
        </h1>

        <div className="loading-subtitle-container">
          <p className="loading-subtitle" style={{ opacity: 0 }}>
            YOU CAN WATCH IT ON ANY DEVICE
          </p>
        </div>

        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill" ref={barRef}></div>
        </div>

        <p className="loading-footer">REPUBLIC OF TORVONKA</p>
      </div>
    </div>
  );
};

export default Loading;