import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThingsGoodAt = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const devSectionRef = useRef(null);
  const aimlSectionRef = useRef(null);
  const otherSectionRef = useRef(null);
    
  const developmentSkills = [
    { name: 'Next.js', icon: '/images/skills/nextjs.png' },
    { name: 'React', icon: '/images/skills/react.webp' },
    { name: 'Node.js', icon: '/images/skills/node.webp' },
    { name: 'HTML', icon: '/images/skills/html.webp' },
    { name: 'CSS', icon: '/images/skills/css.webp' },
    { name: 'JavaScript', icon: '/images/skills/js.webp' },
    { name: 'Typescript', icon: '/images/skills/ts.svg' },
    { name: 'MongoDB', icon: '/images/skills/mongodb.webp' },
    { name: 'Mongoose', icon: '/images/skills/mongoose.png' },
    { name: 'Express', icon: '/images/skills/express.png' },
    { name: 'Redux', icon: '/images/skills/redux.png' },
    { name: 'MySQL', icon: '/images/skills/mysql.webp' },
    { name: 'php', icon: '/images/skills/php.svg' },
    { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg' },
    { name: 'Postman', icon: '/images/skills/postman.webp' },
    { name: 'Shadcn', icon: '/images/skills/shadcn.png' },
    { name: 'Gsap', icon: '/images/skills/gsap.webp' },
    { name: 'Threejs', icon: '/images/skills/threejs.webp' },
    { name: 'Tailwind', icon: '/images/skills/tailwind.png' },
  ];

  const aimlSkills = [
    { name: 'Python', icon: '/images/skills/python.svg' },
    { name: 'TensorFlow', icon: '/images/skills/tensorflow.svg' },
    { name: 'Keras', icon: '/images/skills/Keras.svg' },
    { name: 'Scikit-learn', icon: '/images/skills/scikit-learn.svg' },
    { name: 'NumPy', icon: '/images/skills/numpy.svg' },
    { name: 'Pandas', icon: '/images/skills/Pandas.svg' },
    { name: 'Matplotlib', icon: '/images/skills/Matplotlib.svg' },
    { name: 'Jupyter Notebook', icon: '/images/skills/Jupyter.svg' },
    { name: 'OpenCV', icon: '/images/skills/opencv.svg' },
    { name: 'PyTorch', icon: '/images/skills/pytorch.svg' },
  ];

  const otherSkills = [
    { name: 'C++', icon: '/images/skills/cpp.svg' },
    { name: 'C', icon: '/images/skills/c.svg' },
    { name: 'Git', icon: '/images/skills/git.svg' },
    { name: 'GitHub', icon: '/images/skills/github.webp' },
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

    // Development Skills Section
    const devSection = devSectionRef.current;
    
    // Dev category label
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
        ease: 'power3.out',
        scrollTrigger: {
          trigger: devSection,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Dev skills
    gsap.fromTo(
      '.dev-skill',
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: devSection,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    // AI/ML Skills Section
    const aimlSection = aimlSectionRef.current;
    
    // AI/ML category label
    gsap.fromTo(
      '.aiml-category',
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aimlSection,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // AI/ML skills
    gsap.fromTo(
      '.aiml-skill',
      {
        opacity: 0,
        scale: 0,
       y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: aimlSection,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Other Skills Section
    const otherSection = otherSectionRef.current;
    
    // Other category label
    gsap.fromTo(
      '.other-category',
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: otherSection,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Other skills
    gsap.fromTo(
      '.other-skill',
      {
        opacity: 0,
        scale: 0,
       y: 50,
      },
      {
        opacity: 1,
        scale: 1,
       y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: otherSection,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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
        <div ref={devSectionRef} className="mb-16">
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
                <img className='p-[5px]' src={`${skill.icon}`} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML Skills */}
        <div ref={aimlSectionRef} className='mb-16'>
          <div className="aiml-category inline-block px-6 py-3 border-2 border-white rounded-full text-xl mb-8">
            ai/ml
          </div>

          <div className="flex flex-wrap gap-4">
            {aimlSkills.map((skill, index) => (
              <div
                key={index}
                className="aiml-skill w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer shadow-lg"
                title={skill.name}
              >
                <img className='p-[5px]' src={`${skill.icon}`} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div ref={otherSectionRef}>
          <div className="other-category inline-block px-6 py-3 border-2 border-white rounded-full text-xl mb-8">
            other
          </div>

          <div className="flex flex-wrap gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="other-skill w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform cursor-pointer shadow-lg"
                title={skill.name}
              >
                <img className='p-[5px]' src={`${skill.icon}`} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsGoodAt;