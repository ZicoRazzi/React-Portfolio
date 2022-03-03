import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <NavMenu />
      {/* <ScrollToTop /> */}
      <SmoothScrollBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </SmoothScrollBar>
    </div>
  );
}

export default App;
