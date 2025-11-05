import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Photography from './components/Photography';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              {/*<About />
              <Skills />
              <Projects />*/}
              <Photography />
              <Contact />
            </>
          } />
        </Routes>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
