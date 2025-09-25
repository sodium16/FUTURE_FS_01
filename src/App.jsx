import React from 'react';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsContact from './components/AchievementsContact';
import Header from './components/Header';

// We no longer need GSAP here since the complex animations are removed.

function App() {
  // The main container is now a standard div. No refs or special positioning needed.
  return (
    <div>
      <Header />
      <main>
        {/* The sections will now scroll naturally, one after the other. */}
        <Landing />
        <About />
        <Skills />
        <Projects />
        <AchievementsContact />
      </main>
    </div>
  );
}

export default App;

