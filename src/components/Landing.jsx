import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import profileImage from '../assets/vishwas-profile.png';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { title: 'DIGITAL AND DESIGN CORE', company: 'nodedotai', desktopPosition: 'absolute top-[30%] left-[5%] md:left-[15%] text-left' },
  { title: 'MARKETING TEAM MEMBER', company: 'TEDxBITBangalore', desktopPosition: 'absolute top-[30%] right-[5%] md:right-[15%] text-right' },
  { title: 'SOPHOMORE IN ENGINEERING', company: 'Bangalore Institute of Technology', desktopPosition: 'absolute bottom-[10%] left-[5%] md:left-[15%] text-left' },
  { title: 'FULL-STACK WEB DEVELOPER INTERN', company: 'Future Interns', desktopPosition: 'absolute bottom-[10%] right-[5%] md:right-[15%] text-right' },
];

const Landing = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
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
            .to('.landing-image-container', { y: -50, scale: 1.05 }, 0)
            .fromTo('.experience-card', { opacity: 0, y: 50, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, stagger: 0.2 }, 0);
        },
        "(max-width: 767px)": function() {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: componentRef.current,
              start: 'top top',
              end: 'bottom 70%',
              scrub: 1,
            }
          });

          tl.to('.landing-title', { y: -80, opacity: 0.2 }, 0);
          tl.to('.landing-image-container', { y: -40 }, 0);
          
          gsap.from('.experience-card', {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.experience-cards-container',
              start: 'top 85%',
            }
          });
        }
      });

      gsap.fromTo('.landing-image-container', { y: 150, opacity: 0 }, {
        y: 0, opacity: 1, delay: 0.8, duration: 0.15, ease: 'power2.out',
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} id="landing" className="min-h-screen w-full bg-brand-bg-light relative overflow-hidden pt-24 md:pt-0">
      
      <div className="hidden md:block w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <div className="landing-title text-center z-10">
            <h1 className="font-anton text-[15vw] lg:text-[14rem] leading-none text-brand-text uppercase">
              Vishwas <br />Naveen
            </h1>
          </div>
          <div className="landing-image-container absolute bottom-0 w-full max-w-[550px] h-[95%] z-20">
            <img src={profileImage} alt="Vishwas Naveen" className="absolute bottom-[-50px] w-full h-full object-contain object-bottom" />
          </div>
          <div className="absolute inset-0 max-w-7xl mx-auto z-30">
            {experiences.map((exp, index) => (
              <div key={index} className={`experience-card ${exp.desktopPosition} w-64 p-4 border border-gray-300/40 rounded-lg backdrop-blur-sm opacity-0`}>
                <h3 className="font-bold text-xl text-white tracking-wider">{exp.title}</h3>
                <p className="text-gray-200">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center px-4">
        <div className="landing-title text-center">
          <h1 className="font-anton text-[24vw] leading-tight text-brand-text uppercase">
            Vishwas <br />Naveen
          </h1>
        </div>
        <div className="landing-image-container w-full max-w-sm my-8">
          <img src={profileImage} alt="Vishwas Naveen" className="w-full h-full object-contain" />
        </div>
        <div className="experience-cards-container grid grid-cols-1 gap-4 w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card p-4 border border-gray-300/40 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold text-xl text-white tracking-wider text-center">{exp.title}</h3>
              <p className="text-gray-200 text-center mt-2">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;

