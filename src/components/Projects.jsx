import React from 'react';

// Import BOTH project images
import linksurakshaImg from '../assets/482012359-eeaa3617-6aac-4b18-a3cb-724e999acb3a 1.png';
import image2 from '../assets/image 2.png'; 

const projectData = [
  {
    title: 'Linksuraksha',
    description: 'LinkSuraksha is a lightweight Chrome Extension that detects fake or malicious websites in real-time, helping users stay safe while browsing. It provides instant feedback on URLs, unshortens links for transparency, and ensures a smooth, secure browsing experience without relying on a backend server.',
    techStack: [
      'Frontend: HTML, CSS, JavaScript',
      'Extension Framework: Chrome Extensions API (Manifest V3)',
      'APIs/Tools: URL Unshortening APIs (for real-time link analysis)',
    ],
    imageTop: linksurakshaImg, // The image on top
    imageBottom: image2,      // The image underneath
  },
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen w-full bg-brand-bg-dark bg-dotted-pattern bg-dotted-size flex flex-col justify-center py-24 px-10 lg:px-20"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-white tracking-wide text-left">
          My Projects:
        </h2>
        
        {projectData.map((project, index) => (
          <div 
            key={index}
            className="bg-[#7f7679] p-8 rounded-2xl border border-gray-500/30 shadow-xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text Details */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}:</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <h4 className="text-xl font-semibold text-white mb-3">Tech Stack Used:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              
              {/* Right Column: Layered Images */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm flex flex-col gap-4 relative">
                  {/* Top Image */}
                  <img 
                    src={project.imageTop}
                    alt=""
                    className="rounded-lg shadow-2xl w-full"
                  />
                  {/* Bottom image */}
                  <img 
                    src={project.imageBottom} 
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;