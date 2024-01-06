import React, { useState, useEffect } from 'react';
import Particles from './Components/Particles';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Animation from './Components/Animation';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      
      setShowWelcome(false);
    }, 4000);
  }, []); 

  return (
    <div>
      <BrowserRouter basename='Portfolio'>
        <>
        
          {showWelcome &&
           
           <>
           <Animation/>
           </>
           
          }         
        
          {!showWelcome && (
                 <>
                   <Particles />
              <Navbar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
                 </>
           
          )}
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
