import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);


const TechStack = () => {

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useGSAP(() => {
    gsap.fromTo('.tech-card',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: 'top center'
        }
      }
    )
  })
  if (!isDesktop) return null;

  return (
    <div>
      <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
          {/* <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills Bring to the Table"
                /> */}
          <div className='flex flex-col items-center gap-5'>
            <div className='hero-badge'>
              <p>🤝 The Skills Bring to the Table</p>
            </div>
            <div className='font-semibold md:text-5xl text-3xl text-center'>
              My <span className='text-[#FE7D84]'>Preferred</span> Tech Stack.
            </div>
          </div>


          <div className='tech-grid'>
            {techStackIcons.map((icon) => (
              <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                <div className='tech-card-animated-bg' />
                <div className='tech-card-content'>
                  <div className='tech-icon-wrapper'>
                    <TechIcon model={icon} />
                  </div>
                  <div className='padding-x w-full'>
                    <p>{icon.name}</p>
                  </div>

                </div>
              </div>
            ))}


            {/* This is for the img part if you dont find the 3d models */}
            {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
          </div>
        </div>


      </div>

    </div>
  )
}

export default TechStack