import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {

    const secctionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)




    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0, opacity: 1, duration: 1, delay: 0.1 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });

        gsap.fromTo(
            secctionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 }
        )

    }, [])

    return (
       <section
  ref={secctionRef}
  id="work"
  className="app-showcase"
>
  <div className="w-full">
    <div className="showcaselayout">
      {/* LEFT — Main Project */}
      <div className="first-project-wrapper" ref={project1Ref}>
        <div className="image-wrapper">
          <a href="https://resume-builder-client-lime.vercel.app/" target='_blank'>
          <img src="/images/resumebuilder.png" alt="Resume Builder" className='cursor-pointer' />
          </a>
        </div>
        <div className="text-content">
          <h2>
            Your <span className="text-[#FE7D84]">Personal AI-Resume</span> Builder With{" "}
            <span className="text-[#38CDFA]">Simple</span> UI/UX
          </h2>
          <p className="text-white-50 text-base sm:text-lg md:text-xl">
            Built with MERN Stack for a fast and user-friendly experience.
          </p>
        </div>
      </div>

      {/* RIGHT — Project List */}
      <div className="project-list-wrapper overflow-hidden">
        <div className="project" ref={project2Ref}>
          <div className="image-wrapper">
             <a href="https://quick-gpt-client-swart.vercel.app/" target='_blank'>
            <img src="/images/quickgpt.png" alt="QuickGPT"  className='cursor-pointer' />
             </a>
          </div>
          <h2 className="text-center sm:text-left">
            QuickChat – <span className="text-[#38CDFA]">AI</span> Model
          </h2>
        </div>

        <div className="project" ref={project3Ref}>
          <div className="image-wrapper">
             <a href="https://go-cart-umber.vercel.app/" target='_blank'>
            <img src="/images/gocart.png" alt="GoCart" className='cursor-pointer' />
             </a>
          </div>
          <h2 className="text-center sm:text-left">
            GoCart – Multi Vendor E-Commerce{" "}
            <span className="text-[#FE7D84]">Site</span>.
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ShowcaseSection