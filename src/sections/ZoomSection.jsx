import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const ZoomSection = () => {

  useGSAP(()=>{
    gsap.to(".zoom-text", {
  scale: 20,  // make text so big it fills the screen
  ease: "power2.out",
  ScrollTrigger: {
    trigger: ".text-zoom",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
})

// Background + Text Color Transition
gsap.to(".text-zoom", {
  backgroundColor: "#fff", // background fades to white
  duration: 1,
  ScrollTrigger: {
    trigger: ".text-zoom",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
})
  })
  return (
    <section>
     <section className='flex items-center justify-center section text-zoom'>
      <h2 className="zoom-text">Scroll to Zoom Me 😎</h2>
    </section>

    <section className='flex items-center justify-center section outro'>
      <h1>End of Demo 🎉</h1>
    </section>
    </section>
  )
}

export default ZoomSection