import React from 'react';
import Header from './component/header'
import About from './component/about';
import Footer from './component/footer';
import Contact from './component/contact';
import Resume from './component/resume';
import Projects from './component/projects';
import Skills from './component/skills';
import Main from './component/hero';
import './App.css';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import ScrollToTop from 'react-scroll-to-top';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ScrollToTop smooth />

        <Header />
        <Main />
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <About />
        <Skills />
        <Projects />
        {/* <Resume /> */}
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
