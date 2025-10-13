import React from 'react';

import certificateImg from '../assets/image 3.png';

const AchievementsContact = () => {
  const achievements = [
    '3rd Place - Spark Tank by Google Developer Groups, BIT, for the RFID-based Crowd Management Project.',
    'Advanced to Round 2 - SAP Hackfest 2025 with the LinkSuraksha Chrome Extension.',
    '1st Place - National Seminar Ideathon hosted by Institution of Engineers of India (IEI) with BNM Institute of Technology & Dayananda Sagar Institutions.',
    'Completed - Hacktoberfest 2024, contributing to open-source projects successfully.',
  ];
  
  const links = {
    resume: '../../public/Resume.pdf', 
    linkedin: 'https://www.linkedin.com/in/vishwasnaveen', 
    github: 'https://github.com/sodium16', 
  };

  return (
    <section id="achievements" className="w-full">
      <div className="w-full bg-brand-bg-light py-24 px-10 lg:px-20 text-brand-bg-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 tracking-wide">Achievements:</h2>
            <ul className="space-y-4 list-disc list-inside text-lg">
              {achievements.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            
            <img 
              src={certificateImg} 
              alt="Certificate of Achievement" 
              className="w-full max-w-lg rounded-lg shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105" 
            />

          </div>
        </div>
      </div>
      
      <div id="contact" className="w-full bg-brand-bg-dark py-24 px-10 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 tracking-wide">Let's get in touch:</h2>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href={links.resume} download className="px-8 py-3 bg-brand-button rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">Download my resumé</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-brand-button rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">Connect in LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-brand-button rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">My Github</a>
          </div>
          <ul className="text-gray-300 text-lg space-y-1">
            <li>Vishwas Naveen</li>
            <li>vishwas.naveen2580@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsContact;