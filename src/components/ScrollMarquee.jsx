import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollMarquee = ({ 
  text = "Your Text Here", 
  speed = 1, // 1 is slow, 2 is medium, 3+ is fast
  fontSize = "8rem",
  textColor = "white",
  backgroundColor = "#0a0a0a",
  height = "100vh",
}) => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper) return;

    // Create multiple copies for infinite effect
    const originalContent = wrapper.innerHTML;
    wrapper.innerHTML = originalContent + originalContent + originalContent + originalContent;

    const allItems = wrapper.children;
    const firstItem = allItems[0];
    
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;

    // Set up the scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const moveAmount = -(itemWidth * 2) * progress * speed;
          
          gsap.set(wrapper, {
            x: moveAmount % itemWidth
          });
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [text, speed]);

  return (
    <section 
      ref={containerRef}
      className="scroll-marquee-section"
      style={{ 
        height, 
        background: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
      }}
    >
      <div 
        ref={marqueeRef}
        className="scroll-marquee-track"
        style={{
          display: 'flex',
          position: 'absolute',
          whiteSpace: 'nowrap',
        }}
      >
        <div 
          ref={wrapperRef}
          style={{
            display: 'flex',
            willChange: 'transform'
          }}
        >
          <div 
            className="marquee-text"
            style={{
              fontSize,
              fontWeight: 'bold',
              color: textColor,
              paddingRight: '4rem',
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollMarquee;