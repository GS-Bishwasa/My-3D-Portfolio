import React, { useEffect } from "react";
import gsap from "gsap";

const ScrollMarqueeAnother = () => {
  useEffect(() => {
    let direction = 1; // 1 = forward, -1 = backward
    let marqueeTween = gsap.to(".marque", {
      xPercent: -200,
      repeat: -1,
      duration: 10,
      ease: "none",
    });

    const handleScroll = (e) => {
      const newDirection = e.deltaY > 0 ? 1 : -1;
      if (newDirection !== direction) {
        direction = newDirection;
        marqueeTween.timeScale(direction); // reverse or forward animation
        gsap.to(".marque img", { rotate: direction === 1 ? 180 : 0, duration: 0.5 });
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div id="page1">
      <div className="move">
        {[...Array(6)].map((_, i) => (
          <div className="marque" key={i}>
            <h1 className="md:">Bishwasa</h1>
            <img
              src="/images/arrow-move.svg"
              alt="arrow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollMarqueeAnother;
