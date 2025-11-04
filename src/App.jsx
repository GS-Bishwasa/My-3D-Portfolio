import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './components/Navbar';
import LogoSection from './sections/LogoSection';
import FeatureCards from './sections/FeatureCards';
import ExperienceSection from './sections/ExperienceSection';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import ScrollMarquee from './components/ScrollMarquee';
import ZoomSection from './sections/ZoomSection';
import Footer from './sections/Footer';
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollMarqueeAnother from './components/ScrollMarqueeAnother';
import ThingsGoodAt from './components/ThingsGoodAt';





const PageLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          // Animate loader out with GSAP
          const tl = gsap.timeline({
            onComplete: onLoadingComplete
          });

          // Fade out counter and progress bar
          tl.to('.loader-counter', {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
          })
            .to('.loader-progress', {
              scaleX: 0,
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            }, '-=0.3')
            // Slide up the entire loader
            .to('.loader-container', {
              y: '-100%',
              duration: 0.8,
              ease: 'power3.inOut'
            }, '-=0.2');

          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(counterInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);


  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    // return () => {
    //   lenis.destroy();
    // };
  }, []);

  return (
    <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-black">
      
      <div className="flex flex-col items-center gap-8">
        {/* Counter */}
        <div className="loader-counter text-[120px] md:text-[180px] font-bold text-white tracking-wider leading-none">
          {String(counter).padStart(3, '0')}
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 h-10 bg-gray-800 rounded-sm overflow-hidden">
          <div
            className="loader-progress h-full bg-white transition-all duration-100 ease-linear origin-left"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
  const cursor = document.getElementById("cursor");

  // Hide if not found
  if (!cursor) return;

  // Default GSAP animation values
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  // Update cursor position on mouse move
  const moveCursor = (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Animate content in
  useGSAP(() => {
    if (showContent) {
      const tl = gsap.timeline();

      // Fade in and slide up main content
      tl.fromTo('.main-content',
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }
      )

    }
  }, [showContent]);

  return (
    <div id='main'>
      <div id='cursor'></div>
      {/* Loader */}
      {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}

      {/* Main app */}
      {showContent && (
        <>
          <Navbar />
          <div className="main-content">
            <Hero />
            <ShowcaseSection />
            {/* First Marquee */}
            {/* <ScrollMarquee
              text="GS Bishwasa GS Bishwasa GS Bishwasa"
              speed={0.2}
              fontSize="clamp(4rem, 10vw, 8rem)"
              height="100vh"
            /> */}
            <ScrollMarqueeAnother />
            {/* <LogoSection /> */}
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <ThingsGoodAt />
            <Contact />
            {/* <ZoomSection /> */}
            
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default App