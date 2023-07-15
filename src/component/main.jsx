import React from 'react';
import Header from './header'
import About from './about';
import Footer from './footer';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';
import Hero from './hero';

import { motion } from 'framer-motion';

import '../App.css';
import { createContext } from "react";
import ScrollToTop from 'react-scroll-to-top';


export const ThemeContext = createContext(null);


export default function Main() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className='main'>
        <ScrollToTop smooth />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </motion.div>
  );
}
