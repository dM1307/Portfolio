import React, { useEffect } from 'react';
import './App.css';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThreeBackground from "./components/ThreeBackground";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
  
      document.body.classList.add("parallax-enabled");
  
      document.body.classList.toggle("parallax-x-left", x < -0.2);
      document.body.classList.toggle("parallax-x-right", x > 0.2);
      document.body.classList.toggle("parallax-y-up", y < -0.2);
      document.body.classList.toggle("parallax-y-down", y > 0.2);
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);  

  return (
    <div className="app">
      <ThreeBackground />
      <div className="background-overlay" />
      <Background3D />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;