import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.js';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
