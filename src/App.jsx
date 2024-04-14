import { useState } from 'react';
import Container from './components/container/Container';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/slides/about/About';
import Experiences from './components/slides/experiences/Experiences';
import Skills from './components/slides/skills/Skills';
import Certificates from './components/slides/certificates/Certificates';
import Projects from './components/slides/projects/Projects';

// Function to generate a unique identifier
const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
};

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<About key={generateUniqueId()} />} />
          <Route path="about" element={<About key={generateUniqueId()} />}>
            <Route path="experience" element={<Experiences key={generateUniqueId()} />} />
          </Route>
          <Route path="experience" element={<Experiences key={generateUniqueId()} />} />
          <Route path="skills" element={<Skills key={generateUniqueId()} />} />
          <Route path="certificates" element={<Certificates key={generateUniqueId()} />} />
          <Route path="projects" element={<Projects key={generateUniqueId()} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
