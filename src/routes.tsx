import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Pages
import Home from './components/Home';
import About from './components/SobreMim';

export default function AppRouter() {
    return(
        <Router>
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
         </Routes>
        </Router>
    );
};