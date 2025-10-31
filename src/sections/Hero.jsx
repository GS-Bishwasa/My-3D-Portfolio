import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeoModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'


const Hero = () => {
    useGSAP(() => {
    // Longer delay to wait for 3D model
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" }, 
      delay: 0.8 // Increased delay
    });

    tl.fromTo(".hero-text h1", 
      { y: 80, opacity: 0, filter: "blur(8px)" },
      { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
        stagger: 0.18, 
        duration: 1,
        ease: "expo.out",
      }
    )
    .fromTo(".hero-description", 
      { y: 30, opacity: 0, filter: "blur(5px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 
      "-=0.6"
    )
    .fromTo(".hero-button", 
      { y: 20, opacity: 0, scale: 0.9 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" }, 
      "-=0.4"
    )
    .fromTo(".hero-3d-layout", 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 
      "-=1"
    );
  }, []);

    return (
        <section className='relative overflow-hidden' id='hero'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>


            <div className='hero-layout'>
                {/* LEFT: HERO CONTENT */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className="hero-text" style={{ perspective: '1000px' }}>
                            <h1 style={{ transformStyle: 'preserve-3d' }}>
                                Shaping
                                <span className='slide'>
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span key={`${word.text}-${index}`} className='flex items-center md:gap-3 gap-1 pb-2 '>
                                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#FE7D84] ' />
                                                <span className='text-[#FE7D84]'>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1 style={{ transformStyle: 'preserve-3d' }}>into Real Projects</h1>
                            <h1 style={{ transformStyle: 'preserve-3d' }}><span className='text-[#38CDFA]'>that Deliver</span> Result</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>Hi, I'm Bishwasa, a developer based in India with a passion for code.</p>

                        <Button className="md:w-80 md:h-16 w-60 h-12" id='button' text='See my Works' />
                    </div>
                </header>


                {/* RIGHT: 3D MODEL */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>


            <AnimatedCounter />
        </section>
    )
}

export default Hero