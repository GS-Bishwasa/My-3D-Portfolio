import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThingsGoodAt = () => {
  const sectionRef = useRef(null);
      const titleRef = useRef(null);
      const subtitleRef = useRef(null);
    
      const developmentSkills = [
        { name: 'Next.js', icon: '/images/skills/nextjs.png' },
        { name: 'React', icon: '/images/skills/react.webp' },
        { name: 'Node.js', icon: '/images/skills/node.webp' },
        { name: 'HTML', icon: '/images/skills/html.webp' },
        { name: 'CSS', icon: '/images/skills/css.webp' },
        { name: 'JavaScript', icon: '/images/skills/js.webp' },
        { name: 'MongoDB', icon: '/images/skills/mongodb.webp' },
        { name: 'Mongoose', icon: '/images/skills/mongoose.png' },
        { name: 'Express', icon: '/images/skills/express.png' },
        { name: 'GitHub', icon: '/images/skills/github.webp' },
        { name: 'Redux', icon: '/images/skills/redux.png' },
        { name: 'MySQL', icon: '/images/skills/mysql.webp' },
        { name: 'C++', icon: '/images/skills/cpp.svg' },
        { name: 'php', icon: '/images/skills/php.svg' },
        { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg' },
        { name: 'Postman', icon: '/images/skills/postman.webp' },
        { name: 'Shadcn', icon: '/images/skills/shadcn.png' },
        { name: 'Gsap', icon: '/images/skills/gsap.webp' },
        { name: 'Threejs', icon: '/images/skills/threejs.webp' },
        { name: 'Tailwind', icon: '/images/skills/tailwind.png' },
      ];
    
      const designingSkills = [
        { name: 'Adobe XD', icon: '💜' },
        { name: 'Photoshop', icon: '💙' },
        { name: 'Premiere Pro', icon: '💜' },
        { name: 'Illustrator', icon: '🟠' },
        { name: 'Procreate', icon: '🎨' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Canva', icon: '💙' },
      ];
    
      useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const subtitle = subtitleRef.current;
    
        // Title animation
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
    
        // Subtitle animation
        gsap.fromTo(
          subtitle,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
    
        // Development skills animation
        gsap.fromTo(
          '.dev-category',
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
    
       // Developer Skills Animation (fade + slide up)
  gsap.fromTo(
    ".dev-skill",
    {
      opacity: 0,
      y: 50, // start slightly below
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        // markers:true,
        start: "top 30%", // trigger when section enters view
        toggleActions: "play none none none",
      },
    }
  );

  // Designing Skills Animation (fade + slide up)
  gsap.fromTo(
    ".design-category",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.05,
      delay: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        // markers:true,
        start: "top 10%",
        toggleActions: "play none none none",
      },
    }
  );
    
        gsap.fromTo(
          '.design-skill',
          {
            opacity: 0,
            scale: 0,
            rotation: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: section,
              // markers:true,
              start: '30% 30%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);

  return (
   <section
      ref={sectionRef}
      className="min-h-screen text-white py-20 px-8 z-10"
    >
      <div className="max-w-6xl md:mx-20 mx-1">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Things I'm <span className="text-[#00D9FF]">good</span> at
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 mb-16"
        >
          skills, interests, passion and hobbies
        </p>

        {/* Development Skills */}
        <div className="mb-16">
          <div className="dev-category inline-block px-6 py-3 border-2 border-white rounded-full text-xl mb-8">
            development
          </div>

          <div className="flex flex-wrap gap-4">
            {developmentSkills.map((skill, index) => (
              <div
                key={index}
                className="dev-skill w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer shadow-lg"
                title={skill.name}
              >
                 <img className='p-[5px]' src={`${skill.icon}`} alt="" />
                {/* {skill.icon} */}
              </div>
            ))}
          </div>
        </div>

        {/* Designing Skills */}
        <div>
          <div className="design-category inline-block px-6 py-3 border-2 border-white rounded-full text-xl mb-8">
            others
          </div>

          <div className="flex flex-wrap gap-4">
            {designingSkills.map((skill, index) => (
              <div
                key={index}
                className="design-skill w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer shadow-lg"
                title={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsGoodAt;