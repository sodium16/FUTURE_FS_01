import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import profileImage from '../assets/vishwas-profile.png';

// 1. We register the GSAP plugin to make it available for use
gsap.registerPlugin(ScrollTrigger);

// 2. We add the data for the new experience cards
const experiences = [
  { title: 'DIGITAL AND DESIGN CORE', company: 'nodedotai', position: 'absolute top-[30%] left-[5%] md:left-[15%] text-left' },
  { title: 'MARKETING TEAM MEMBER', company: 'TEDxBITBangalore', position: 'absolute top-[30%] right-[5%] md:right-[15%] text-right' },
  { title: 'SOPHOMORE IN ENGINEERING', company: 'Bangalore Institute of Technology', position: 'absolute bottom-[10%] left-[5%] md:left-[15%] text-left' },
  { title: 'FULL-STACK WEB DEVELOPER INTERN', company: 'Future Interns', position: 'absolute bottom-[10%] right-[5%] md:right-[15%] text-right' },
];

const Landing = () => {
  const componentRef = useRef(null);

  // 3. This is the GSAP animation code
  useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    // NEW ANIMATION FOR THE PHOTO ON PAGE LOAD
    gsap.fromTo(
      '.landing-image',
      { y: 150, opacity: 1 }, // Initial state: lower and invisible
      {
        y: 0,
        opacity: 1,
        delay: 0.8, // 800ms delay
        duration: 0.15, // 150ms duration
        ease: 'power2.out', // A nice easing for a smooth finish
      }
    );

    // This is your existing scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
      },
    });

    tl.to('.landing-title', { opacity: 0, y: -100 }, 0)
      .to('.landing-image', { y: -50, scale: 1.05 }, 0)
      .fromTo('.experience-card', 
  { opacity: 0, y: 50, scale: 0.8 }, // Starts smaller
  { opacity: 1, y: 0, scale: 1, stagger: 0.2 }, // Ends at full size
  0
);
      
  }, componentRef);
  return () => ctx.revert();
}, []);

  return (
    // 4. We add a `ref` and change the z-index layering
    <section ref={componentRef} id="landing" className="h-screen w-full bg-brand-bg-light relative overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        
        {/* The z-index is now 10 (at the back) */}
        <div className="landing-title text-center z-10">
          <h1 className="font-anton text-[16vw] md:text-[15vw] lg:text-[14rem] leading-none text-brand-text uppercase">
            Vishwas <br />Naveen
          </h1>
        </div>

        {/* The z-index is now 20 (in the middle) */}
        <div className="landing-image absolute bottom-0 w-full max-w-[550px] h-[95%] z-20">
          <img 
            src={profileImage} 
            alt="Vishwas Naveen"
            className="absolute bottom-[-50px] w-full h-full object-contain object-bottom"
          /> 
        </div>
        
        {/* 5. NEW: The experience cards are added here (highest z-index) */}
        <div className="absolute inset-0 max-w-7xl mx-auto z-30">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-card ${exp.position} w-64 p-4 border border-gray-300/40 rounded-lg backdrop-blur-sm opacity-0`}
            >
              <h3 className="font-bold text-xl text-white tracking-wider">{exp.title}</h3>
              <p className="text-gray-200">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;