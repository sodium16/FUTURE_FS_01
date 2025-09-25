import React from 'react';

// You'll need a different, more square-like photo for this section
import aboutImage from '../assets/profile-about.png'; 

const About = () => {
  return (
    <section 
      id="about" 
      // Here we apply the background pattern
      className="font-poppins min-h-screen w-full bg-brand-bg-dark bg-dotted-pattern bg-dotted-size flex items-center py-24 px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="md:col-span-3">
          <h2 className="text-5xl mb-6 text-white tracking-wide">
            About Me:
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a second year AI & ML engineering student at Bangalore Institute of Technology. I am always in a constant state of continuous hunger for learning something new and all the time. Aside from coding, I am a professional speedcuber with a sub-9 record of 8.100s. Other interests of mine include but isn't limited to drawing, playing the guitar, volleyball and many more. I enjoy solving challenging problems, experimenting with creative ideas, and collaborating on projects that make an impact. I also love reading about AI trends, tech innovations, and personal growth.
          </p>
        </div>
        
        {/* Right Column: Image */}
        <div className="md:col-span-2 flex justify-center">
            {/* === UNCOMMENT THIS IMG TAG ONCE YOU HAVE YOUR 'ABOUT' IMAGE === */}
            
            <img 
                src={aboutImage} 
                alt="Vishwas Naveen"
                className="w-[350px] h-[350px] object-cover rounded-2xl shadow-2xl"
            /> 
            
        </div>
      </div>
    </section>
  );
};

export default About;