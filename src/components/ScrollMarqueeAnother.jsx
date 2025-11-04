import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollMarqueeAnother = () => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);
  const directionRef = useRef(1);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    // Create seamless infinite scroll animation
    tweenRef.current = gsap.to(".marque", {
      xPercent: -100,
      repeat: -1,
      duration: 8,
      ease: "none",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0)
      }
    });

    let lastScrollY = 0;
    let scrollDelta = 0;

    const handleScroll = (e) => {
      // Accumulate scroll delta for better sensitivity
      scrollDelta += e.deltaY;
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Only change direction if scroll delta is significant
      if (Math.abs(scrollDelta) > 50) {
        const newDirection = scrollDelta > 0 ? 1 : -1;
        
        if (newDirection !== directionRef.current) {
          directionRef.current = newDirection;
          
          // Smooth animation direction change
          gsap.to(tweenRef.current, {
            timeScale: newDirection,
            duration: 0.3,
            ease: "power2.out"
          });
          
          // Rotate arrows smoothly
          gsap.to(".marque img", {
            rotate: newDirection === 1 ? 0 : 180,
            duration: 0.6,
            ease: "power2.inOut"
          });
        }
        
        scrollDelta = 0;
      }

      // Reset scroll delta after inactivity
      scrollTimeoutRef.current = setTimeout(() => {
        scrollDelta = 0;
      }, 150);
    };

    // Touch support for mobile
    let touchStartY = 0;
    let touchDelta = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      touchDelta = touchStartY - touchY;

      if (Math.abs(touchDelta) > 30) {
        const newDirection = touchDelta > 0 ? 1 : -1;
        
        if (newDirection !== directionRef.current) {
          directionRef.current = newDirection;
          
          gsap.to(tweenRef.current, {
            timeScale: newDirection,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(".marque img", {
            rotate: newDirection === 1 ? 0 : 180,
            duration: 0.6,
            ease: "power2.inOut"
          });
        }
        
        touchStartY = touchY;
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  return (
    <div id="page1" className="overflow-hidden py-8">
      <div className="move flex whitespace-nowrap" ref={marqueeRef}>
        {[...Array(8)].map((_, i) => (
          <div className="marque flex items-center gap-8 pr-8" key={i}>
            <h1 className="md:text-[4vw] text-[10vw] text-black">
              Bishwasa
            </h1>
            <img
              src="/images/arrow-left.svg"
              alt="arrow"
              className="md:h-[4vw] h-[10vw] flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMarqueeAnother;