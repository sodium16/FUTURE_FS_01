import React from 'react';

import pythonIcon from '../assets/download 1.png';
import cIcon from '../assets/download 2.png';
import cppIcon from '../assets/download 3.png';
import htmlIcon from '../assets/download 4.png';
import cssIcon from '../assets/download 5.png';
import jsIcon from '../assets/download 6.png';
import javaIcon from '../assets/download 7.png';
import reactIcon from '../assets/download 8.png';
import nodeicon from '../assets/image 1.png';

const skillsData = [
  { name: 'Python', icon: pythonIcon },
  { name: 'C', icon: cIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'Web Dev', icons: [htmlIcon, cssIcon, jsIcon, nodeicon] }, 
  { name: 'Java', icon: javaIcon }, 
  { name: 'React', icon: reactIcon }, 
];


const Skills = () => {
  return (
    <section 
      id="skills" 
      className="font-poppins min-h-screen w-full bg-brand-bg-light flex flex-col items-center justify-center py-24 px-10 lg:px-20"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl mb-16 text-brand-bg-dark tracking-wide text-left">
          My Skills:
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div key={skill.name} className="bg-brand-bg-dark rounded-xl p-6 flex flex-col items-center justify-center aspect-square transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              
              <div className="h-33 w-33 mb-4 flex items-center justify-center">
                {skill.icons ? (
                  <div className="grid grid-cols-2 gap-2 w-full h-full">
                    {skill.icons.map((iconSrc, index) => (
                      <img key={index} src={iconSrc} alt="" className="w-full h-full object-contain" />
                    ))}
                  </div>
                ) : (
                  <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                )}
              </div>
              
              <p className="text-xl text-white mt-auto">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;