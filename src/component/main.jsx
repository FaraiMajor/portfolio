import React from 'react';
import Header from './header'
import About from './about';
import Footer from './footer';
import Contact from './contact';
import Projects from './projects';
import Skills from './skills';
import Hero from './hero';
import Slider from './slider';
import { data } from "./data";

import { motion } from 'framer-motion';

import '../App.css';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import ScrollToTop from 'react-scroll-to-top';


export const ThemeContext = createContext(null);


export default function Main() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <ScrollToTop smooth />
          <Header />
          <Hero />
          {/* <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> */}
          <About />
          <Skills />
          <Projects />
          {/* <Slider data={data} /> */}
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </motion.div>
  );
}
