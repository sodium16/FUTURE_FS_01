import React from 'react';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsContact from './components/AchievementsContact';
import Header from './components/Header';

function App() {
    return (
    <div>
      <Header />
      <main>
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

