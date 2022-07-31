import React from 'react';
import Header from './component/header'
import About from './component/about';
import Footer from './component/footer';
import Contact from './component/contact';
import Resume from './component/resume';
import Projects from './component/projects';
import Skills from './component/skills';

function App() {
  return (
    <div >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
